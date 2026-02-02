import apiRequest from './apiConfig';

// Get all products
export const getProducts = async (params = {}) => {
  const queryString = new URLSearchParams(params).toString();
  return await apiRequest(`/products${queryString ? `?${queryString}` : ''}`);
};

// Get single product
export const getProduct = async (id) => {
  return await apiRequest(`/products/${id}`);
};

// Create product (Admin only)
export const createProduct = async (productData) => {
  return await apiRequest('/products', {
    method: 'POST',
    body: productData,
  });
};

// Update product (Admin only)
export const updateProduct = async (id, productData) => {
  return await apiRequest(`/products/${id}`, {
    method: 'PUT',
    body: productData,
  });
};

// Delete product (Admin only)
export const deleteProduct = async (id) => {
  return await apiRequest(`/products/${id}`, {
    method: 'DELETE',
  });
};
