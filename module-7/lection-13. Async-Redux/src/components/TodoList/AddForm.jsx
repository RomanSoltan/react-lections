import { Field, Form, Formik } from "formik";
import s from "./TodoList.module.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoSlice";

const AddForm = () => {
  const initialValues = { todo: "" };
  const dispatch = useDispatch();
  const onSubmit = (values, options) => {
    const newObject = {
      todo: values.todo,
      isCompleted: false,
      id: crypto.randomUUID(),
    };
    dispatch(addTodo(newObject));
    options.resetForm();
  };

  return (
    <div className={s.addFormWrapper}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Field className={s.input} name="todo" placeholder="Enter new todo" />
          <button type="submit">Add todo</button>
        </Form>
      </Formik>
    </div>
  );
};
export default AddForm;
