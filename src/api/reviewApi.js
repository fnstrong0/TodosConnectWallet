import apiRequest from './apiConfig';

// Get all reviews
export const getReviews = async (productId = null) => {
  const query = productId ? `?productId=${productId}` : '';
  return await apiRequest(`/reviews${query}`);
};

// Get single review
export const getReview = async (id) => {
  return await apiRequest(`/reviews/${id}`);
};

// Create new review
export const createReview = async (reviewData) => {
  return await apiRequest('/reviews', {
    method: 'POST',
    body: reviewData,
  });
};

// Update review
export const updateReview = async (id, reviewData) => {
  return await apiRequest(`/reviews/${id}`, {
    method: 'PUT',
    body: reviewData,
  });
};

// Delete review
export const deleteReview = async (id) => {
  return await apiRequest(`/reviews/${id}`, {
    method: 'DELETE',
  });
};

// Mark review as helpful
export const markReviewHelpful = async (id) => {
  return await apiRequest(`/reviews/${id}/helpful`, {
    method: 'PUT',
  });
};
