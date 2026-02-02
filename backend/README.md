# Backend API Documentation

This is the Node.js/Express backend for the myself e-commerce application.

## Features

- User authentication (JWT)
- User registration with email verification
- Password reset functionality
- Product management
- Category and brand management
- Shopping cart
- Order management
- Payment processing
- Product reviews and ratings
- Admin and user roles

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Nodemailer** - Email sending
- **express-validator** - Input validation

## Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory with the following variables:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/myself
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRE=7d
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
EMAIL_FROM=noreply@myself.com
FRONTEND_URL=http://localhost:3000
```

4. Make sure MongoDB is running on your system.

5. Start the server:
```bash
# Development mode (with nodemon)
npm run dev

# Production mode
npm start
```

The server will run on `http://localhost:5000` by default.

## API Endpoints

### Authentication (`/api/auth`)

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user
- `GET /api/auth/verify-email?token=xxx` - Verify email
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password` - Reset password

### Users (`/api/users`)

- `GET /api/users` - Get all users (Admin only)
- `GET /api/users/:id` - Get single user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user (Admin only)

### Products (`/api/products`)

- `GET /api/products` - Get all products (with filters)
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (Admin only)
- `PUT /api/products/:id` - Update product (Admin only)
- `DELETE /api/products/:id` - Delete product (Admin only)

### Categories (`/api/categories`)

- `GET /api/categories` - Get all categories
- `GET /api/categories/:id` - Get single category
- `POST /api/categories` - Create category (Admin only)
- `PUT /api/categories/:id` - Update category (Admin only)
- `DELETE /api/categories/:id` - Delete category (Admin only)

### Brands (`/api/brands`)

- `GET /api/brands` - Get all brands
- `GET /api/brands/:id` - Get single brand
- `POST /api/brands` - Create brand (Admin only)
- `PUT /api/brands/:id` - Update brand (Admin only)
- `DELETE /api/brands/:id` - Delete brand (Admin only)

### Cart (`/api/cart`)

- `GET /api/cart` - Get user's cart
- `POST /api/cart` - Add item to cart
- `PUT /api/cart/:itemId` - Update cart item quantity
- `DELETE /api/cart/:itemId` - Remove item from cart
- `DELETE /api/cart` - Clear cart

### Orders (`/api/orders`)

- `GET /api/orders` - Get all orders
- `GET /api/orders/:id` - Get single order
- `POST /api/orders` - Create new order
- `PUT /api/orders/:id/pay` - Update order to paid
- `PUT /api/orders/:id/deliver` - Update order to delivered (Admin only)
- `PUT /api/orders/:id/status` - Update order status (Admin only)

### Payments (`/api/payments`)

- `GET /api/payments` - Get all payments
- `GET /api/payments/:id` - Get single payment
- `POST /api/payments` - Create new payment
- `PUT /api/payments/:id/refund` - Process refund (Admin only)

### Reviews (`/api/reviews`)

- `GET /api/reviews` - Get all reviews
- `GET /api/reviews/:id` - Get single review
- `POST /api/reviews` - Create new review
- `PUT /api/reviews/:id` - Update review
- `DELETE /api/reviews/:id` - Delete review
- `PUT /api/reviews/:id/helpful` - Mark review as helpful

## Authentication

Most endpoints require authentication. Include the JWT token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

## Error Handling

All errors are returned in the following format:

```json
{
  "success": false,
  "message": "Error message"
}
```

## Database Models

- **User** - User accounts with authentication
- **Product** - Products in the store
- **Category** - Product categories
- **Brand** - Product brands
- **Cart** - Shopping cart items
- **Order** - Customer orders
- **Payment** - Payment transactions
- **Review** - Product reviews and ratings

## Development

The server uses nodemon in development mode for automatic restarts on file changes.

## Production

Make sure to:
- Set `NODE_ENV=production`
- Use a strong `JWT_SECRET`
- Configure proper email settings
- Set up MongoDB connection string for production
- Enable CORS for your frontend domain only
