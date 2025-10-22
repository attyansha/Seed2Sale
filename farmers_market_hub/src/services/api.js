import API_BASE_URL from '../config/api.js';

export const apiService = {
  async getMarkets() {
    const response = await fetch(`${API_BASE_URL}/markets`); // Remove /api
    return await response.json();
  },

  async getMarketById(id) {
    const response = await fetch(`${API_BASE_URL}/markets/${id}`); // Remove /api
    return await response.json();
  },

  async register(userData) {
    const response = await fetch(`${API_BASE_URL}/auth/register`, { // Remove /api
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });
    return await response.json();
  },

  async login(credentials) {
    const response = await fetch(`${API_BASE_URL}/auth/login`, { // Remove /api
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });
    return await response.json();
  }
};