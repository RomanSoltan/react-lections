import { useState } from "react";
import todosData from "../../assets/todos.json";
import TodoItem from "./TodoItem";
import s from "./TodoList.module.css";

const TodoList = () => {
  // Додамо динаміки з допомогою state
  // можна передати порожній масив замість todosData
  const [todos, setTodos] = useState(todosData);
  // Збережемо дані, які ввів користувач, до state
  const [newValue, setNewValue] = useState("");

  // Релізуємо видалення елементів
  const handleDelete = (id) => {
    // видалимо елемент з допомогою filter()
    const newData = todos.filter((item) => item.id !== id);
    // запишемо новий масив у state
    setTodos(newData);
  };

  // Релізуємо додавання елементів
  const addTodo = () => {
    // елемент, який потрібно додати
    const newObj = {
      // згенеруємо унікальний id
      id: crypto.randomUUID(),
      // значення, яке ввів user у інпуті, ми витягуємо зі стейту
      todo: newValue,
    };
    // додамо в список новий елемент, змінивши стейт
    setTodos((prev) => [...prev, newObj]);
    // очищення інпута
    setNewValue("");
  };
  return (
    <div>
      <div className="flex">
        {/* передамо дані, які вводить користувач, до add.
        навісимо обробник події і запишемо в стейт те, 
        що ввів користувач у інпуті */}
        <input
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
          className={s.input}
        />
        {/* навісимо onClick на кнопку додавання */}
        <button onClick={addTodo} className="btn border">
          Add
        </button>
      </div>
      <ul className={s.list}>
        {todos.map((item) => (
          // відправимо пропс handleDelete в TodoItem, для того, щоб
          // компонент TodoItem міг викликати функцію handleDelete
          <TodoItem key={item.id} {...item} handleDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
