import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilteredState {
  searchTerm: string;
  matchedCategoryIds: number[];
  matchedProductIds: number[];
}

const initialState: FilteredState = {
  searchTerm: "",
  matchedCategoryIds: [],
  matchedProductIds: [],
};

const filteredSlice = createSlice({
  name: "filteredSlice",
  initialState,
  reducers: {
    updateFilter: (state, action: PayloadAction<FilteredState>) => {
      state.searchTerm = action.payload.searchTerm;
      state.matchedCategoryIds = action.payload.matchedCategoryIds;
      state.matchedProductIds = action.payload.matchedProductIds;
    },
    clearFilter: (state) => {
      state.searchTerm = "";
      state.matchedCategoryIds = [];
      state.matchedProductIds = [];
    },
  },
});

export const { updateFilter, clearFilter } = filteredSlice.actions;
export default filteredSlice.reducer;
