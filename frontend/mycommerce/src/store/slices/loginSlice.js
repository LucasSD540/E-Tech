import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoggedIn: false };

const isLoggedInSlice = createSlice({
  name: "isLoggedIn",
  initialState,
  reducers: {
    changeIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { changeIsLoggedIn } = isLoggedInSlice.actions;
export default isLoggedInSlice.reducer;
