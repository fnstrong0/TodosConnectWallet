import apiRequest from './apiConfig';

// Get all orders
export const getOrders = async () => {
  return await apiRequest('/orders');
};

// Get single order
export const getOrder = async (id) => {
  return await apiRequest(`/orders/${id}`);
};

// Create new order
export const createOrder = async (orderData) => {
  return await apiRequest('/orders', {
    method: 'POST',
    body: orderData,
  });
};

// Update order to paid
export const payOrder = async (id, paymentResult) => {
  return await apiRequest(`/orders/${id}/pay`, {
    method: 'PUT',
    body: { paymentResult },
  });
};
