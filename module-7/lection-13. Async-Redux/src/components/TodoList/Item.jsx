import { FaStar } from "react-icons/fa";
import s from "./TodoList.module.css";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../../redux/todoSlice";
import { useState } from "react";

const Item = ({ isCompleted, todo, id, isFavorite }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState(todo);

  return (
    <div>
      <li className={s.item}>
        <input type="checkbox" checked={isCompleted} />
        <div>
          {editMode ? (
            <div>
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onBlur={() => {
                  dispatch(editTodo({ id, todo: value }));
                  setEditMode(false);
                }}
              />
            </div>
          ) : (
            <p onClick={() => setEditMode(true)}>
              {isFavorite && <FaStar color="gold" />} {todo}{" "}
            </p>
          )}
        </div>

        <div>
          <button>{isFavorite ? "Dislike" : "Like"}</button>
          <button
          // onClick={
          //   () =>
          //   dispatch(
          //     editTodo({ id, todo: prompt("Enter new value: ") || todo })
          //   )
          // }
          >
            Edit
          </button>
          <button onClick={() => dispatch(deleteTodo(id))}>Delete</button>{" "}
          {/** {type: 'todos/deleteTodo', payload: 1} */}
        </div>
      </li>
    </div>
  );
};
export default Item;
