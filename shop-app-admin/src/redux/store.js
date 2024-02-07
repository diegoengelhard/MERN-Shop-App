// Import configureStore from Redux Toolkit
import { configureStore, combineReducers } from '@reduxjs/toolkit';

// Import reducers
import userReducer from './features/userSlice';
import productReducer from './features/productSlice';

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

// Root reducer with user reducers -> for local storage
const rootReducer = combineReducers({
    user: userReducer,
    product: productReducer,
});

// Persisted root reducer for local storage -> keep user state after refresh
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store with reducers 
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