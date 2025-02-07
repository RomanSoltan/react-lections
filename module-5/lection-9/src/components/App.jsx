import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Aim from "./NestedRoutes/Aim";
import Company from "./NestedRoutes/Company";
import Team from "./NestedRoutes/Team";

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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
