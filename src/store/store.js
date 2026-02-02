import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';
import themeReducer from './slices/themeSlice';
import cartReducer from './slices/cartSlice';
import productReducer from './slices/productSlice.js';
import orderReducer from './slices/orderSlice';
import paymentReducer from './slices/paymentSlice';
import reviewReducer from './slices/reviewSlice';
import categoryReducer from './slices/categorySlice';
import brandReducer from './slices/brandSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    theme: themeReducer,
    cart: cartReducer,
    product: productReducer,
    order: orderReducer,
    payment: paymentReducer,
    review: reviewReducer,
    category: categoryReducer,
    brand: brandReducer,
  },
});