import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  category: null,
  isLoading: false,
  error: null,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { setCategories, setCategory, clearError } = categorySlice.actions;
export default categorySlice.reducer;
