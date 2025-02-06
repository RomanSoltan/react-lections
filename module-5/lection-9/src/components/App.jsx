import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
