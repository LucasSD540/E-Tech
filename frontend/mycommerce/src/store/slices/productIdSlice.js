import { createSlice } from "@reduxjs/toolkit";

const initialState = { productId: "" };

const productIdSlice = createSlice({
  name: "productId",
  initialState,
  reducers: {
    changeProductId: (state, action) => {
      state.productId = action.payload;
    },
  },
});

export const { changeProductId } = productIdSlice.actions;
export default productIdSlice.reducer;
