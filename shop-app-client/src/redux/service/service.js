import axios from 'axios';

// Import userSlice
import userSlice from '../features/userSlice';

// Define API URL
const API = axios.create({
    baseURL: 'http://localhost:3500/api'
});

// Product routes
// Get product by id
const getProduct = async (id) => API.get(`/products/${id}`);

// User Auth routes
// Login route
const login = async (dispatch, user) => {
    try {
        const res = await API.post('/auth/login', user);
        dispatch(userSlice.actions.loginSuccess(res.data));
    } catch (err) {
        dispatch(userSlice.actions.loginFailure());
    }
}

// Register route
const register = async (dispatch, user) => {
    try {
        const res = await API.post('/auth/register', user);
        dispatch(userSlice.actions.registerSuccess(res.data));
    } catch (err) {
        dispatch(userSlice.actions.registerFailure());
    }
}

// Payment route
const payment = async (tokenId, amount) => API.post('/payment', { tokenId, amount });

// Export service functions
const service = {
    // Product routes
    getProduct,
    // User Auth routes
    login,
    register,
    // Payment route
    payment
};

export default service;