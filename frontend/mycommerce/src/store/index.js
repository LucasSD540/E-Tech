import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../services/productApi";
import { categoryApi } from "../services/categoryApi";
import { authApi } from "../services/authApi";
import productIdReducer from "./slices/productIdSlice";
import isLoggedInReducer from "./slices/loginSlice";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    productId: productIdReducer,
    isLoggedIn: isLoggedInReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productApi.middleware)
      .concat(categoryApi.middleware)
      .concat(authApi.middleware),
});
