import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  brands: [],
  brand: null,
  isLoading: false,
  error: null,
};

const brandSlice = createSlice({
  name: 'brand',
  initialState,
  reducers: {
    setBrands: (state, action) => {
      state.brands = action.payload;
    },
    setBrand: (state, action) => {
      state.brand = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { setBrands, setBrand, clearError } = brandSlice.actions;
export default brandSlice.reducer;
