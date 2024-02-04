// Import configureStore from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

// Import the cart reducer
import cartReducer from './features/cartSlice';

// Create the store with the cart reducer
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Export the store
export default store;