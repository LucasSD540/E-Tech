import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../services/productApi";
import { categoryApi } from "../services/categoryApi";
import productIdReducer from "./slices/productIdSlice";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    productId: productIdReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productApi.middleware)
      .concat(categoryApi.middleware),
});
