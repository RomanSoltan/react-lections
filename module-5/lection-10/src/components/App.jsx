import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
// import Home from "../pages/Home";
// import About from "../pages/About";
// import NotFound from "../pages/NotFound";
// import Aim from "./NestedRoutes/Aim";
// import Company from "./NestedRoutes/Company";
// import Team from "./NestedRoutes/Team";
// import Users from "../pages/Users";
// import UserDetails from "../pages/UserDetails";
// import UserPosts from "./NestedRoutes/UserPosts";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Users = lazy(() => import("../pages/Users"));
const UserDetails = lazy(() => import("../pages/UserDetails"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Aim = lazy(() => import("./NestedRoutes/Aim"));
const Company = lazy(() => import("./NestedRoutes/Company"));
const Team = lazy(() => import("./NestedRoutes/Team"));
const UserPosts = lazy(() => import("./NestedRoutes/UserPosts"));

function App() {
  return (
    <main>
      <Header />
      <Suspense fallback={<h2>Loader suspense...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="aim" element={<Aim />} />
            <Route path="company" element={<Company />} />
            <Route path="team" element={<Team />} />
          </Route>
          <Route path="/users" element={<Users />} />
          <Route path="/users/:userId" element={<UserDetails />}>
            <Route path="info" element={<h2>Info about user</h2>} />
            <Route path="posts" element={<UserPosts />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </main>
  );
}

export default App;
