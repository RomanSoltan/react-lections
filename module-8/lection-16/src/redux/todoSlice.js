import { createSlice } from "@reduxjs/toolkit";
import { addTodo, deleteTodo, editTodo, fetchData } from "./todosOps";
import { logoutThunk } from "./authOperations";

const initialState = {
  items: [],
  isLoading: false,
  isError: false,
};

const slice = createSlice({
  name: "todos",
  initialState,
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
      })
      .addCase(logoutThunk.fulfilled, () => initialState)
      .addCase(deleteTodo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(addTodo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(editTodo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        const itemIndex = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        if (itemIndex !== -1) {
          state.items[itemIndex] = action.payload;
        }
      })
      .addCase(editTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export const todoReducer = slice.reducer;
