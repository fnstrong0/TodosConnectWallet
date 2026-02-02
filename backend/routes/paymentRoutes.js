const express = require('express');
const router = express.Router();
const Payment = require('../models/Payment');
const Order = require('../models/Order');
const { protect, authorize } = require('../middleware/auth');

// @route   GET /api/payments
// @desc    Get all payments (Admin) or user's payments
// @access  Private
router.get('/', protect, async (req, res, next) => {
  try {
    let query = {};
    
    // If not admin, only show user's payments
    if (req.user.role !== 'admin') {
      query.user = req.user.id;
    }

    const payments = await Payment.find(query)
      .populate('order', 'totalPrice status')
      .populate('user', 'name email')
      .sort('-createdAt');

    res.json({
      success: true,
      count: payments.length,
      data: payments
    });
  } catch (error) {
    next(error);
  }
});

// @route   GET /api/payments/:id
// @desc    Get single payment
// @access  Private
router.get('/:id', protect, async (req, res, next) => {
  try {
    const payment = await Payment.findById(req.params.id)
      .populate('order', 'totalPrice status orderItems')
      .populate('user', 'name email');

    if (!payment) {
      return res.status(404).json({
        success: false,
        message: 'Payment not found'
      });
    }

    // Users can only view their own payments unless admin
    if (payment.user._id.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to view this payment'
      });
    }

    res.json({
      success: true,
      data: payment
    });
  } catch (error) {
    next(error);
  }
});

// @route   POST /api/payments
// @desc    Create new payment
// @access  Private
router.post('/', protect, async (req, res, next) => {
  try {
    const { orderId, paymentMethod, paymentDetails } = req.body;

    if (!orderId || !paymentMethod) {
      return res.status(400).json({
        success: false,
        message: 'Order ID and payment method are required'
      });
    }

    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }

    // Users can only create payments for their own orders
    if (order.user.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to create payment for this order'
      });
    }

    // Generate transaction ID
    const transactionId = `TXN${Date.now()}${Math.random().toString(36).substring(2, 11).toUpperCase()}`;

    const payment = await Payment.create({
      order: orderId,
      user: req.user.id,
      paymentMethod,
      amount: order.totalPrice,
      status: 'processing',
      transactionId,
      paymentDetails: paymentDetails || {}
    });

    // Update order payment status
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: transactionId,
      status: 'completed',
      update_time: new Date().toISOString()
    };
    await order.save();

    // Update payment status
    payment.status = 'completed';
    payment.paidAt = Date.now();
    await payment.save();

    await payment.populate('order', 'totalPrice status');

    res.status(201).json({
      success: true,
      data: payment
    });
  } catch (error) {
    next(error);
  }
});

// @route   PUT /api/payments/:id/refund
// @desc    Process refund (Admin only)
// @access  Private/Admin
router.put('/:id/refund', protect, authorize('admin'), async (req, res, next) => {
  try {
    const payment = await Payment.findById(req.params.id);

    if (!payment) {
      return res.status(404).json({
        success: false,
        message: 'Payment not found'
      });
    }

    if (payment.status !== 'completed') {
      return res.status(400).json({
        success: false,
        message: 'Only completed payments can be refunded'
      });
    }

    payment.status = 'refunded';
    payment.refundedAt = Date.now();
    await payment.save();

    // Update order status
    const order = await Order.findById(payment.order);
    if (order) {
      order.status = 'cancelled';
      await order.save();
    }

    res.json({
      success: true,
      data: payment
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
