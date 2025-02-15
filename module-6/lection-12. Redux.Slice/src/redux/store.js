import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";

// підключення persist
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { todoReducer } from "./todoSlice";
import { filterReducer } from "./filterSlice";

const persistConfig = {
  key: "counter-persist",
  version: 1,
  storage,
  // blacklist for localStorage
  // blacklist: ["step"],
  // відкидається все окрім counter
  whitelist: ["counter"],
};

// трикутник долі для persist
const persistedReducer = persistReducer(persistConfig, counterReducer);

export const store = configureStore({
  // пiдключаємо reducer
  // 7. Підключити в сторі новий слайс замість старого редюсера
  reducer: {
    counter: persistedReducer,
    todos: todoReducer,
    filter: filterReducer,
  },
  // для persist
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// export persistor
export const persistor = persistStore(store);
