import apiRequest from './apiConfig';

// Register user
export const register = async (userData) => {
  return await apiRequest('/auth/register', {
    method: 'POST',
    body: userData,
  });
};

// Login user
export const login = async (credentials) => {
  return await apiRequest('/auth/login', {
    method: 'POST',
    body: credentials,
  });
};

// Logout user
export const logout = async () => {
  return await apiRequest('/auth/logout', {
    method: 'POST',
  });
};

// Get current user
export const getCurrentUser = async () => {
  return await apiRequest('/auth/me');
};

// Verify email
export const verifyEmail = async (token) => {
  return await apiRequest(`/auth/verify-email?token=${token}`);
};

// Forgot password
export const forgotPassword = async (email) => {
  return await apiRequest('/auth/forgot-password', {
    method: 'POST',
    body: { email },
  });
};

// Reset password
export const resetPassword = async (token, password) => {
  return await apiRequest('/auth/reset-password', {
    method: 'POST',
    body: { token, password },
  });
};
