import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  product: null,
  isLoading: false,
  error: null,
  filters: {
    keyword: '',
    category: '',
    brand: '',
    minPrice: '',
    maxPrice: '',
  },
  pagination: {
    page: 1,
    limit: 10,
    total: 0,
  },
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.products || action.payload.data || [];
      if (action.payload.total !== undefined) {
        state.pagination.total = action.payload.total;
      }
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    setPagination: (state, action) => {
      state.pagination = { ...state.pagination, ...action.payload };
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { setProducts, setProduct, setFilters, setPagination, clearError } = productSlice.actions;
export default productSlice.reducer;
