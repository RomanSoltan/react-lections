import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter/counterReducer";

export const store = configureStore({
  // пфдключаємо reducer
  reducer: {
    counter: counterReducer,
  },
});
