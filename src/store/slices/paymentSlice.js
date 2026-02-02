import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  payments: [],
  payment: null,
  isLoading: false,
  error: null,
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setPayments: (state, action) => {
      state.payments = action.payload;
    },
    setPayment: (state, action) => {
      state.payment = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { setPayments, setPayment, clearError } = paymentSlice.actions;
export default paymentSlice.reducer;
