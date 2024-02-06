import axios from 'axios';

// Import userSlice
import { userSlice } from '../features/userSlice';

// Define API URL
const API = axios.create({
    baseURL: 'http://localhost:3500/api'
});

// Product routes
// Get product by id
const getProduct = async (id) => API.get(`/products/${id}`);

// User Auth routes
// Login route
const login = (userData) => async (dispatch) => {
    dispatch(userSlice.actions.loginStart());
    try {
        const res = await API.post('/auth/signin', userData);
        dispatch(userSlice.actions.loginSuccess(res.data));
    } catch (err) {
        dispatch(userSlice.actions.loginFailure());
    }
}

// Register route
const register = (userData) => async (dispatch) => {
    dispatch(userSlice.actions.registerStart());
    try {
        const res = await API.post('/auth/signup', userData);
        dispatch(userSlice.actions.registerSuccess(res.data));
    } catch (err) {
        dispatch(userSlice.actions.registerFailure());
    }
}

// Logout route
const logout = () => async (dispatch) => {
    await API.get('/auth/signout');
    dispatch(userSlice.actions.logout());
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
    logout,
    // Payment route
    payment
};

export default service;