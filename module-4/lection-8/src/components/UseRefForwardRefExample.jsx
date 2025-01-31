import { useRef } from "react";
import CustomInput from "./CustomInput";

const UseRefForwardRefExample = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div>
      <h2>React.forwardRef Example</h2>
      <CustomInput ref={inputRef} placeholder="Enter the text..." />
      <button onClick={focusInput}>Set focus on input</button>
    </div>
  );
};
export default UseRefForwardRefExample;
