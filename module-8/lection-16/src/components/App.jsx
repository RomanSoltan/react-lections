import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Todos from "../pages/Todos/Todos";
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "../redux/authOperations";
import { selectIsRefreshing } from "../redux/selectors";
import PrivateRoute from "../config/routes/PrivateRoute";
import PublicRoute from "../config/routes/PublicRoute";
import RestrictedRoute from "../config/routes/RestrictedRoute";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? null : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="todos"
          element={
            <PrivateRoute>
              <Todos />
            </PrivateRoute>
          }
        />
      </Route>
      <Route
        path="/login"
        element={<RestrictedRoute component={<Login />} redirectTo="/todos" />}
      />
      <Route
        path="/register"
        element={
          <PublicRoute redirectTo="/">
            <Register />
          </PublicRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
