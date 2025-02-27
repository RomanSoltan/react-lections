//https://task-manager-api.goit.global

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 5. create authOperations.js
// 6. if you have 2 or more backends, then create instance and set axios.baseUrl
export const api = axios.create({
  baseURL: "https://task-manager-api.goit.global",
  // headers:
});

// 17. utilite which setHeader
const setAuthHeader = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};
// 20. utilite which clear
const clearAuthHeader = () => {
  api.defaults.headers.common.Authorization = ``;
};

// 7. create request
// 8. create registerThunk
// 9. go to authSlice todo extraRedusers
export const registerThunk = createAsyncThunk(
  "auth/register",
  async (body, thunkAPI) => {
    try {
      const { data } = await api.post("/users/signup", body);
      // 18. set token
      setAuthHeader(data.token);
      // викинули дані запиту назовні
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// 10. create login
// 11. after creating go to authSlice.js
export const loginThunk = createAsyncThunk(
  "auth/login",
  async (body, thunkAPI) => {
    try {
      const { data } = await api.post("/users/login", body);
      // 19. set token
      setAuthHeader(data.token);
      // викинули дані запиту назовні
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// 15. create logout
// 16. go to authSlice
export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await api.post("/users/logout");
      // 21. clear token then logout
      clearAuthHeader();
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
