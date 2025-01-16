import s from "./TodoList.module.css";

const TodoItem = ({ id, todo, handleDelete }) => {
  return (
    <li className={s.item}>
      <input type="checkbox" />
      <span>{todo}</span>
      {/* навісимо onClick на кнопку видалення */}
      <button onClick={() => handleDelete(id)} className="btn border">
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
