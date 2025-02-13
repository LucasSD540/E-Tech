import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../services/productApi";
import { categoryApi } from "../services/categoryApi";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productApi.middleware)
      .concat(categoryApi.middleware),
});
