import axios from 'axios';

// Define API URL
const API = axios.create({
    baseURL: 'http://localhost:3500/api'
});

// Product routes
// Get product by id
const getProduct = async (id) => API.get(`/products/${id}`);

// Export service functions
const service = {
    getProduct
};

export default service;