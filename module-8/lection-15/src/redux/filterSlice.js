import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
  status: "all",
};

const slice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      // все що буде писатися в інпуті буде зберігатися в редаксі
      state.filter = action.payload;
    },
    changeVisibilityStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const filterReducer = slice.reducer;
export const { setFilter, changeVisibilityStatus } = slice.actions;
