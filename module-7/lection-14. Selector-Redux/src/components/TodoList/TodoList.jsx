import { useEffect, useState } from "react";
// import AddForm from "./AddForm";
import List from "./List";
import SearchBar from "./SearchBar";
import s from "./TodoList.module.css";
import { useDispatch } from "react-redux";
import { addTodo, fetchData } from "../../redux/todosOps";
import Modal from "../Modal/Modal";
import TodoForm from "./TodoForm";
import Filter from "./Filter";

const TodoList = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const handleSubmit = (values, options) => {
    dispatch(addTodo(values));
    setIsOpen(false);
    options.resetForm();
  };

  useEffect(() => {
    const abortController = new AbortController();
    // виклик функції з операцій
    dispatch(fetchData({ signal: abortController.signal }));
    return () => {
      abortController.abort();
    };
  }, [dispatch]);

  return (
    <div className={s.todoWrapper}>
      {/* <AddForm /> */}
      <button onClick={() => setIsOpen(true)}>Add</button>
      <SearchBar />
      <Filter />
      <List />
      {isOpen && (
        <Modal>
          <TodoForm handleSubmit={handleSubmit} initialValues={{ todo: "" }} />
        </Modal>
      )}
    </div>
  );
};
export default TodoList;
