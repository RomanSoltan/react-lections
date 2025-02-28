import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/authOperations";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();
  // 12. create dispatch
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    console.log(values);
    // 13. using dispatch
    // 14. add unwrap to dispatch and waiting on result asyn
    // loginThunk, then navigate to '/todos' (its working only asyncThunk)
    dispatch(loginThunk(values))
      .unwrap()
      .then((res) => {
        toast.success(`Welcome ${res.user.email}`);
        // erase path history for no goBack to login
        navigate("/todos", { replace: true });
      })
      .catch(() => toast.error("invalid data"));
    options.resetForm();
  };

  return (
    <div className="formWrapper">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="form">
          <label>
            <span>Email:</span>
            <Field name="email" />
          </label>
          <label>
            <span>Password:</span>
            <Field name="password" type="password" />
          </label>

          <button type="submit">Login</button>

          <p style={{ color: "black" }}>
            You dont have account yet? <Link to="/register">Get it</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};
export default Login;
