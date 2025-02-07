import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Aim from "./NestedRoutes/Aim";
import Company from "./NestedRoutes/Company";
import Team from "./NestedRoutes/Team";
import Users from "../pages/Users";
import UserDetails from "../pages/UserDetails";
import UserPosts from "./NestedRoutes/UserPosts";

function App() {
  return (
    <main>
      <Header />
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
    </main>
  );
}

export default App;
