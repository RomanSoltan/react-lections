import { useEffect } from "react";
import AddForm from "./AddForm";
import List from "./List";
import SearchBar from "./SearchBar";
import s from "./TodoList.module.css";
import { useDispatch } from "react-redux";
import { fetchData } from "../../redux/todosOps";

const TodoList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // виклик функції з операцій
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className={s.todoWrapper}>
      <AddForm />
      <SearchBar />
      <List />
    </div>
  );
};
export default TodoList;
