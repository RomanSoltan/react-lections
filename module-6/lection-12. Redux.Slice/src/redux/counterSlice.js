import { createSlice } from "@reduxjs/toolkit";

// 1. Створити початковий стан
// 2. Створити слайс
// 3. Дати йому назву
// 4. Передати йому стан
// 5. Прописати reducers: {}
// 6. Експортувати counterReducer = slice.reducer
// 7. Підключити в сторі новий слайс замість старого редюсера
// 8. Додати функції у reducers
// 9. Експортувати екшени (наші маленькі функції з reducers) з slice.actions
// 10. Використати нові функції в компонентах вже імпортуючи їх з слайса

// 1. Створити початковий стан
const initialState = {
  step: 1,
  counter: 0,
};

// 2. Створити слайс
// createSlice() приходить з reduxjs/toolkit
const slice = createSlice({
  // набір налаштувань
  // назва слайса (слайс це маленька частина великого стору)
  // 3. Дати йому назву
  name: "counter",
  // 4. Передати йому стан
  // те з чим працює слайс
  initialState,
  // потеційний функціонал
  // все, що є в reducers то є action
  // функції, які ми будемо використовувати в компонентах
  // пишуться в reducers, а експортуються вони з actions
  // 5. Прописати reducers: {}
  reducers: {
    // 8. Додати функції у reducers
    increment: (state, action) => {
      state.counter += state.step;
    },
    decrement: (state, action) => {
      state.counter -= state.step;
    },
    reset: (state, action) => {
      return initialState;
    },
    changeStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

// 6. Експортувати counterReducer = slice.reducer
export const counterReducer = slice.reducer;
// експорт функції назовні, яка буде викликатися в нашому коді
// 9. Експортувати екшени (наші маленькі функції з reducers) з slice.actions
export const { increment, decrement, reset, changeStep } = slice.actions;
