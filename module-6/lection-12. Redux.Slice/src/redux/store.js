import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";

export const store = configureStore({
  // пiдключаємо reducer
  // 7. Підключити в сторі новий слайс замість старого редюсера
  reducer: {
    counter: counterReducer,
  },
});
