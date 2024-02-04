import { createSlice } from "@reduxjs/toolkit";

// Cart slice to manage the cart state
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  // Reducers to handle the state changes
  reducers: {
    // Action to add a product to the cart
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
  },
});

// Export the actions
export const { addProduct } = cartSlice.actions;

// Export the reducer to be combined with other reducers
export default cartSlice.reducer;