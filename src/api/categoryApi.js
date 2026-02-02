import apiRequest from './apiConfig';

// Get all categories
export const getCategories = async () => {
  return await apiRequest('/categories');
};

// Get single category
export const getCategory = async (id) => {
  return await apiRequest(`/categories/${id}`);
};
