# Як перехати на `createAsyncThunk`

1. Створити файл під назвою `todoOps`
2. Записати в нього налаштування axios

```
axios.defaults.baseURL = "https://67b4fb67a9acbdb38ed105dc.mockapi.io";
```

3. Створити першу санку

```
export const fetchData = createAsyncThunk(
  // type for action
  "todos/fetchData",
  // має бути завжди два аргумента у функції
  // 1. аргумент передає компонент
  // 2. аргумент передає createAsyncThunk
  async (аргумент_1, аргумент_2) => {
    try {
      // запит на сервер
      const { data } = await axios.get("/tasks");
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
```

- аргумент_1 - body або інформація від компонента (новий контакт, айді для видалення, оновлюючі дані)
- аргумент_2 - набір інструментів (повернення помилок)

4. В слайсі додати екстра редьюсери

```
 extraReducers: (builder) => {
    // перехоплює дані, після виклику функції в компоненті TodoList
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
      })
      // коли спрацьовує fulfilled-статус перехоплюємо цю операцію.
      // те що повертається із санки потрапляє як екшн у payload
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        // зберігаємо дані локально в стані
        state.items = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
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
        const item = state.items.find((item) => item.id === action.payload.id);
        item.todo = action.payload.todo;
      })
      .addCase(editTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },

```

- це допоможе нам синхронізувати дані між сервером і локальним клієнтом
  - перехоплення будь-яких інших екшенів з сторонніх файлів

5. В компоненті маємо викликати екшн через dispatch()

```
const dispatch = useDispatch();

  useEffect(() => {
    // виклик функції з операцій
    dispatch(fetchData());
  }, [dispatch]);

```

- це для нас ініціалізує запит на сервер - дані запишуться в стейт

6. Повторити з наступними санками
