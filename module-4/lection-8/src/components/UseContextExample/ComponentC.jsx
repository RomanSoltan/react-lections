import { useContext } from "react";
// import { myContext } from "../App";

const ComponentC = ({ message }) => {
  // const { auto, model } = useContext(myContext);
  return (
    <div className="target">
      <h2>This is target component</h2>
      <h3>Message: {message}</h3>
      {/* <h3>Auto: {auto}</h3>
      <p>Model: {model}</p> */}
    </div>
  );
};
export default ComponentC;

// Передача інфо через пропси від батьківського компонента до дочірнього наз propsDrilling
