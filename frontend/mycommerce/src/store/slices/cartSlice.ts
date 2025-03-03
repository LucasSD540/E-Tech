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
      const items = state.items.find(
        (item) =>
          item.product.cardProductId === action.payload.product.cardProductId
      );

      if (!items) {
        state.items.push(action.payload);
      } else {
        alert("Esse produto já foi adicionado ao carrinho");
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (item) => item.product.cardProductId !== action.payload
      );
    },
    clear: (state) => {
      state.items = [];
    },
  },
});

export const { add, remove, clear } = cartSlice.actions;
export default cartSlice.reducer;
