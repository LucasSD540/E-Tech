import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../services/productApi";
import { categoryApi } from "../services/categoryApi";
import { authApi } from "../services/authApi";
import { checkoutApi } from "../services/checkoutApi";
import productIdReducer from "./slices/productIdSlice";
import isAuthInReducer from "./slices/loginSlice";
import cartReducer from "./slices/cartSlice";
import overlaySlice from "./slices/overlaySlice";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [checkoutApi.reducerPath]: checkoutApi.reducer,
    productId: productIdReducer,
    isAuth: isAuthInReducer,
    cart: cartReducer,
    overlay: overlaySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productApi.middleware)
      .concat(categoryApi.middleware)
      .concat(authApi.middleware)
      .concat(checkoutApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
