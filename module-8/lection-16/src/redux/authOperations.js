//https://task-manager-api.goit.global

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const api = axios.create({
  baseURL: "https://task-manager-api.goit.global",
  // headers:
});

const setAuthHeader = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  api.defaults.headers.common.Authorization = ``;
};

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (body, thunkAPI) => {
    try {
      const { data } = await api.post("/users/signup", body);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (body, thunkAPI) => {
    try {
      const { data } = await api.post("/users/login", body);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await api.post("/users/logout");
      clearAuthHeader();
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

// основна ідея функції - зробити запит на сервер і отримати дані мого акаунта,
// тобто перевіряється чи був user на сайті, чи залишився його token
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      // take token from local storage
      const savedToken = thunkAPI.getState().auth.token;
      console.log(savedToken);
      // if no token return error
      if (savedToken === null) {
        return thunkAPI.rejectWithValue("Token does not exist");
      }

      // if token exist, then set token and make
      // request with token
      // go to authSlice.js
      setAuthHeader(savedToken);
      const { data } = await api.get("/users/me");
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
