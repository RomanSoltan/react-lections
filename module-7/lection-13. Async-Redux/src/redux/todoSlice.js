import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./todosOps";

const initialState = {
  items: [],
  isLoading: false,
  isError: false,
};

const slice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    deleteTodo: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    editTodo: (state, action) => {
      // 1. Отримати id і отримати новий текст
      // 2. Пробігти по масиву
      // 3. Знайти потрібний елемент по id
      // 4. Поміняти тому елементу тайтл
      const item = state.items.find((item) => item.id === action.payload.id);
      item.todo = action.payload.todo;
    },
    fetchDataSuccess: (state, action) => {
      state.items = action.payload;
      // коли дані завантажились, лоадер має бути false
      state.isLoading = false;
    },
    setIsError: (state, action) => {
      // state.isLoading = false;
      state.isError = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  // опрацювання даних після запиту на сервер
  // extraReducers - це всі екшени, які виконуються за межами
  // описаних редюсерів
  extraReducers: (builder) => {
    // перехоплює дані, після виклику функції в компоненті TodoList
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
      })
      // коли спрацьовує fulfilled-статус перехоплюємо цю операцію.
      // те що повертається із санки потрааляє як екшн у payload
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        // зберігаємо дані локально в стані
        state.items = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export const todoReducer = slice.reducer;

export const {
  deleteTodo,
  addTodo,
  editTodo,
  fetchDataSuccess,
  setIsError,
  setIsLoading,
} = slice.actions;
