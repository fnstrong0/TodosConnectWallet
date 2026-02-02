import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [],
  order: null,
  isLoading: false,
  error: null,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    setOrder: (state, action) => {
      state.order = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { setOrders, setOrder, clearError } = orderSlice.actions;
export default orderSlice.reducer;
