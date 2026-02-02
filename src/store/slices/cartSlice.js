import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalPrice: 0,
  isLoading: false,
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.items = action.payload.items || [];
      state.totalPrice = action.payload.totalPrice || 0;
    },
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        item => item.product._id === action.payload.product._id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      state.totalPrice = state.items.reduce((total, item) => {
        return total + (item.price * item.quantity);
      }, 0);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item._id !== action.payload);
      state.totalPrice = state.items.reduce((total, item) => {
        return total + (item.price * item.quantity);
      }, 0);
    },
    updateCartItem: (state, action) => {
      const item = state.items.find(item => item._id === action.payload.itemId);
      if (item) {
        item.quantity = action.payload.quantity;
      }
      state.totalPrice = state.items.reduce((total, item) => {
        return total + (item.price * item.quantity);
      }, 0);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { setCart, addToCart, removeFromCart, updateCartItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
