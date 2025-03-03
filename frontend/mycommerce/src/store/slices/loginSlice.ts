import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IsAuthState {
  isAuth: boolean;
}

const initialState: IsAuthState = { isAuth: false };

const isAuthSlice = createSlice({
  name: "isAuth",
  initialState,
  reducers: {
    changeIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
});

export const { changeIsAuth } = isAuthSlice.actions;
export default isAuthSlice.reducer;
