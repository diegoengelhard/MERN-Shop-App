import axios from 'axios';

// Define slices
import { userSlice } from '../features/userSlice';
import { productSlice } from '../features/productSlice';

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

// Logout route
const logout = () => async (dispatch) => {
    await API.get('/auth/signout');
    dispatch(userSlice.actions.logout());
}


// User routes
// Get latest 5 users
const getLatestUsers = async () => {
    try {
        const res = await API.get('/user/latest');
        return res.data;
    } catch (err) {
        return err;
    }
}

// Get user stats
const getUserStats = async () => {
    try {
        const res = await API.get('/user/stats');
        return res.data;
    } catch (err) {
        return err;
    }
}

// Product routes
// Get all products
const getProducts = () => async (dispatch) => {
    try {
        const res = await API.get('/products');
        dispatch(productSlice.actions.getProductSuccess(res.data));
    } catch (err) {
        return err;
    }
}

// Find product by id
const findProductById = async (id) => {
    try {
        const res = await API.get(`/products/${id}`);
        console.log(res.data);
        return res.data;
    } catch (err) {
        return err;
    }
}

// Update product
const updateProduct = (id, productData) => async (dispatch) => {
    dispatch(productSlice.actions.updateProductStart());
    try {
        const res = await API.put(`/products/update/${id}`, productData);
        return res.data;
    } catch (err) {
        dispatch(productSlice.actions.updateProductFailure());
    }
}

// Delete product
const deleteProduct = (id) => async (dispatch) => {
    dispatch(productSlice.actions.deleteProductStart());
    try {
        await API.delete(`/products/delete/${id}`);
        dispatch(productSlice.actions.deleteProductSuccess(id));
    } catch (err) {
        dispatch(productSlice.actions.deleteProductFailure());
    }
}

// Order Routes
// Get latest orders
const getOrders = async () => {
    try {
        const res = await API.get('/order/latest');
        return res.data;
    } catch (err) {
        return err;
    }
}

// Get Income
const getIncome = async () => {
    try {
        const res = await API.get('/order/income');
        return res.data;
    } catch (err) {
        return err;
    }
}

// Get Income by Product
const getIncomeByProduct = async (productId) => {
    try {
        const res = await axios.get(`orders/income/?productId=${productId}`);
        return res.data;
    } catch (err) {
        return err;
    }
}

// Export service functions
const service = {
    // User Auth routes
    login,
    logout,
    // User routes
    getLatestUsers,
    getUserStats,
    // Product routes
    getProducts,
    findProductById,
    updateProduct,
    deleteProduct,
    // Order routes
    getOrders,
    getIncome,
    getIncomeByProduct,
};

export default service;