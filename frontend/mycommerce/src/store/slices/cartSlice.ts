import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductItem } from "../../components/Card";

interface CartSliceState {
  items: ProductItem[];
}

const initialState: CartSliceState = { items: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ProductItem>) => {
      state.items.push(action.payload);
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (item) => item.product.cardProductId !== action.payload
      );
    },
    clear: (state) => {
      state.items = [];
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const product = state.items.find(
        (item) => item.product.cardProductId === action.payload
      );
      if (product) {
        product.product.quantity += 1;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const product = state.items.find(
        (item) => item.product.cardProductId === action.payload
      );
      if (product && product.product.quantity > 1) {
        product.product.quantity -= 1;
      }
    },
  },
});

export const getSubTotal = (state: { cart: CartSliceState }) =>
  state.cart.items.reduce(
    (sum, item) => sum + item.product.price * item.product.quantity,
    0
  );

export const { add, remove, clear, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
