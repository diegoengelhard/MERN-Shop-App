// Import configureStore from Redux Toolkit
import { configureStore, combineReducers } from '@reduxjs/toolkit';

// Import reducers
import cartReducer from './features/cartSlice';
import userReducer from './features/userSlice';

// Import redux-persist
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// Persist cart state to local storage
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

// Root reducer with cart and user reducers -> for local storage
const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
});

// Persisted root reducer for local storage -> keep cart & user state after refresh
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store with the cart reducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Export the store and persistor
export let persistor = persistStore(store);