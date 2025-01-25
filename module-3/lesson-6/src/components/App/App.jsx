import Apply from "../ApplyForm/ApplyForm";
import Header from "../Header/Header";
import s from "./App.module.css";

function App() {
  return (
    <div className={s.container}>
      <Header />
      <Apply />
    </div>
  );
}

export default App;
