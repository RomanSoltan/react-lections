// https://67b4fb67a9acbdb38ed105dc.mockapi.io/tasks

import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "./authOperations";

// Операція для того, щоб повернути дані або їх відсутність

//               створення операції (функція-екшн)
export const fetchData = createAsyncThunk(
  "todos/fetchData",
  async ({ signal }, thunkAPI) => {
    try {
      // запит на сервер
      const { data } = await api.get("/tasks", { signal });

      return data;
    } catch (error) {
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
      const { data } = await api.patch(`/tasks/${body.id}`, body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
