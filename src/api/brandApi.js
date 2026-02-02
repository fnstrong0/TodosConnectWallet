import apiRequest from './apiConfig';

// Get all brands
export const getBrands = async () => {
  return await apiRequest('/brands');
};

// Get single brand
export const getBrand = async (id) => {
  return await apiRequest(`/brands/${id}`);
};
