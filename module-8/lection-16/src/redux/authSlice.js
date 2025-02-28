import { createSlice } from "@reduxjs/toolkit";
import {
  loginThunk,
  logoutThunk,
  refreshUser,
  registerThunk,
} from "./authOperations";
// 1. initialState
const initialState = {
  user: {
    name: "",
    email: "",
  },
  token: "",
  isLoggedIn: false,
  isRefreshing: false,
};

// 2. create slice
const slice = createSlice({
  name: "auth",
  initialState,
  // 8. create extraReducers for registerThunk
  // 9. Go to Register.jsx
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      // 11. create addCase for login
      // 12. after that, go to Login.jsx
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      //refresh from authOperations.js
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      // 16. if logout, then return initialState
      .addCase(logoutThunk.fulfilled, () => initialState);
  },
});

// 3. export auth and link in store.
// 4. create selectors for auth in selectors.js
export const authReducer = slice.reducer;
