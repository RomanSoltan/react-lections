import { useEffect } from "react";
import Header from "../Header/Header";
import TodoList from "../TodoList/TodoList";
import axios from "axios";
import toast from "react-hot-toast";

function App() {
  // useEffect для abortController
  // перериває завантаження запиту, якщо користувач пішов з сторінки
  useEffect(() => {
    const abortController = new AbortController();

    axios
      .get("https://dummyjson.com/users", { signal: abortController.signal })
      .then((res) => console.log(res.data))
      .catch((error) => {
        if (axios.isCancel(error)) {
          // console.log("Cancel with abortController");
          toast.error("Cancel abort controller");
        } else {
          console.log(error);
        }
      });

    // якщо запит триває 3 секунди, то зупиняємо його
    setTimeout(() => {
      abortController.abort();
    }, 3000);

    // для useEffect return це функція очистки
    // і вона робить  розмонтування
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      <Header />
      <TodoList />
    </>
  );
}

export default App;
