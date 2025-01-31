import { useRef } from "react";

const UseRefInputFile = () => {
  const inputRef = useRef();

  return (
    <div>
      <h2>UseRefInputFile</h2>
      <button onClick={() => inputRef.current.click()}>CLICK ME</button>
      <input ref={inputRef} style={{ visibility: "hidden" }} type="file" />
    </div>
  );
};
export default UseRefInputFile;
