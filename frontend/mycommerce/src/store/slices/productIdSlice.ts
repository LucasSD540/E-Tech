import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductIdState {
  productId: number;
}

const initialState: ProductIdState = { productId: 0 };

const productIdSlice = createSlice({
  name: "productId",
  initialState,
  reducers: {
    changeProductId: (state, action: PayloadAction<number>) => {
      state.productId = action.payload;
    },
  },
});

export const { changeProductId } = productIdSlice.actions;
export default productIdSlice.reducer;
