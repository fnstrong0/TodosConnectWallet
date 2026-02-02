import apiRequest from './apiConfig';

// Get user's cart
export const getCart = async () => {
  return await apiRequest('/cart');
};

// Add item to cart
export const addToCart = async (productId, quantity = 1) => {
  return await apiRequest('/cart', {
    method: 'POST',
    body: { productId, quantity },
  });
};

// Update cart item quantity
export const updateCartItem = async (itemId, quantity) => {
  return await apiRequest(`/cart/${itemId}`, {
    method: 'PUT',
    body: { quantity },
  });
};

// Remove item from cart
export const removeFromCart = async (itemId) => {
  return await apiRequest(`/cart/${itemId}`, {
    method: 'DELETE',
  });
};

// Clear cart
export const clearCart = async () => {
  return await apiRequest('/cart', {
    method: 'DELETE',
  });
};
