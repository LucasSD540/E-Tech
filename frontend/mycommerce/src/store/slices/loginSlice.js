import { createSlice } from "@reduxjs/toolkit";

const initialState = { isAuth: null };

const isAuthSlice = createSlice({
  name: "isAuth",
  initialState,
  reducers: {
    changeIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  },
});

export const { changeIsAuth } = isAuthSlice.actions;
export default isAuthSlice.reducer;
