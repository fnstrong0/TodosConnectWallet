import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reviews: [],
  review: null,
  isLoading: false,
  error: null,
};

const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    setReviews: (state, action) => {
      state.reviews = action.payload;
    },
    setReview: (state, action) => {
      state.review = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { setReviews, setReview, clearError } = reviewSlice.actions;
export default reviewSlice.reducer;
