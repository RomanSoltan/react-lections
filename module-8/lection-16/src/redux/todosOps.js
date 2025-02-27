// https://67b4fb67a9acbdb38ed105dc.mockapi.io/tasks

import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "./authOperations";

// Операція для того, щоб повернути дані або їх відсутність

//               створення операції (функція-екшн)
export const fetchData = createAsyncThunk(
  // type for action
  "todos/fetchData",
  // має бути завжди два аргумента у функції
  // 1. аргумент передає компонент
  // 2. аргумент передає createAsyncThunk
  async ({ signal }, thunkAPI) => {
    try {
      // запит на сервер
      const { data } = await api.get("/tasks", { signal });
      // якщо ми робимо будь-який return з санки, то це буде
      // завжди fulfilled
      // основна ідея отримати дані і викинути їх назовні
      return data;
    } catch (error) {
      // механізм для викидання помилок
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// видалення данних із сервера
export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id, thunkAPI) => {
    try {
      await api.delete(`/tasks/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// додавання данних на сервер
export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (body, thunkAPI) => {
    try {
      const { data } = await api.post("/tasks", body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// редагування данних на сервері
export const editTodo = createAsyncThunk(
  "todos/editTodo",
  async (body, thunkAPI) => {
    try {
      const { data } = await api.put(`/tasks/${body.id}`, body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
