import axios from 'axios';

// Import userSlice
import { userSlice } from '../features/userSlice';

// Define API URL
const API = axios.create({
    baseURL: 'http://localhost:3500/api'
});


// Add token to request header
API.interceptors.request.use((req) => {
    const persistRoot = localStorage.getItem("persist:root");

    // Check if persistRoot exists
    if (persistRoot) {
        // Parse persistRoot
        const root = JSON.parse(persistRoot);

        // Obtaine user object from root
        const user = root.user ? JSON.parse(root.user) : null;

        // obtain currentUser from user
        const currentUser = user?.currentUser;

        // If currentUser exists, add token to request header
        if (currentUser) {
            const token = currentUser.token;
            if (token) {
                req.headers.Authorization = `${token}`;
            }
        }
    }

    return req;
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

// Order Routes
// Create Order
const createOrder = async (orderData) => {
    try {
        const res = await API.post('/order/create', orderData);
        return res.data;
    } catch (err) {
        return err;
    }
}

// Get Orders by userId
const getOrdersByUserId = async (userId) => {
    try {
        const res = await API.get(`/order/find/${userId}`);
        return res.data;
    } catch (err) {
        return err;
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
    logout,
    // Order routes
    createOrder,
    getOrdersByUserId,
    // Payment route
    payment
};

export default service;