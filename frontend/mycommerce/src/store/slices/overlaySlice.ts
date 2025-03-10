import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OverlayState {
  overlay: boolean;
  popUp: boolean;
}

const initialState: OverlayState = { overlay: false, popUp: false };

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
  },
});

export const { changeOverlay, changePopUp } = overlaySlice.actions;
export default overlaySlice.reducer;
