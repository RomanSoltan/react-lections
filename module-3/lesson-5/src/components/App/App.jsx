import UncontrolledForm from "../Forms/UncontrolledForm";
import s from "./App.module.css";

function App() {
  const register = (credentials) => {
    console.log("Data received!");
    setTimeout(() => {
      console.log("Data processing...");
      setTimeout(() => {
        console.log(credentials);
        console.log("User was register successfully!");
      }, 3000);
    }, 1000);
  };
  return (
    <div className={s.container}>
      <UncontrolledForm register={register} />
    </div>
  );
}

export default App;
