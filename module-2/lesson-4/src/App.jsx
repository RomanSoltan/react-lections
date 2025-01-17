// import Counter from "./componets/Counter/Counter";
import TodoList from "./componets/TodoList/TodoList";
import "./App.css";
import Modal from "./componets/Modal/Modal";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <h1>useEffect</h1>
      {/* <Counter /> */}
      <TodoList />
      <button onClick={openModal}>Open Modal</button>
      {isOpen && <Modal closeModal={closeModal}>Продам килим!</Modal>}
    </div>
  );
}

export default App;
