import axios from 'axios';

// Define API URL
const API = axios.create({
    baseURL: 'http://localhost:3500/api'
});

// Product routes
// Get product by id
const getProduct = async (id) => API.get(`/products/${id}`);

// Payment route
const payment = async (tokenId, amount) => API.post('/payment', { tokenId, amount });

// Export service functions
const service = {
    // Product routes
    getProduct,
    // Payment route
    payment
};

export default service;