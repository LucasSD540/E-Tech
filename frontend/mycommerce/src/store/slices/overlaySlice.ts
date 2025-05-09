import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OverlayState {
  overlay: boolean;
  popUp: boolean;
  searchOverlay: boolean;
}

const initialState: OverlayState = {
  overlay: false,
  popUp: false,
  searchOverlay: false,
};

const overlaySlice = createSlice({
  name: "overlay",
  initialState,
  reducers: {
    changeOverlay: (state, action: PayloadAction<boolean>) => {
      state.overlay = action.payload;
    },
    changePopUp: (state, action: PayloadAction<boolean>) => {
      state.popUp = action.payload;
    },
    changeSearchOverlay: (state, action: PayloadAction<boolean>) => {
      state.searchOverlay = action.payload;
    },
  },
});

export const { changeOverlay, changePopUp, changeSearchOverlay } =
  overlaySlice.actions;
export default overlaySlice.reducer;
