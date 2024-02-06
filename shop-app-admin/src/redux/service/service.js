import axios from 'axios';

// Define UserSlice
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

// Export service functions
const service = {
    // User Auth routes
    login,
};

export default service;