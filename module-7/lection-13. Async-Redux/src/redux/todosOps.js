// https://67b4fb67a9acbdb38ed105dc.mockapi.io/tasks

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://67b4fb67a9acbdb38ed105dc.mockapi.io";

// Операція для того, щоб повернути дані або їх відсутність

//               створення операції (функція-екшн)
export const fetchData = createAsyncThunk(
  // type for action
  "todos/fetchData",
  // має бути завжди два аргумента у функції
  // 1. аргумент передає компонент
  // 2. аргумент передає createAsyncThunk
  async (body, thunkAPI) => {
    try {
      // запит на сервер
      const { data } = await axios.get("/tasks");
      // якщо ми робимо будь-який return з санки, то це буде
      // завжди fulfilled
      // основна ідея отримати дані і викинути їх назовні
      return data;
    } catch (error) {
      console.log(error);
      // механізм для викидання помилок
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// 59:23

// // функція буде повертати іншу функцію
// export const fetchData = () => async (dispatch) => {
//   try {
//     dispatch(setIsError(false));
//     dispatch(setIsLoading(true));
//     const response = await axios.get(
//       "https://67b4fb67a9acbdb38ed105dc.mockapi.io/tasks"
//     );
//     dispatch(fetchDataSuccess(response.data));
//   } catch {
//     dispatch(setIsError(true));
//   } finally {
//     dispatch(setIsLoading(false));
//   }
// };
