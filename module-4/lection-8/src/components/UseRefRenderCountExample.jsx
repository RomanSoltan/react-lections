import { useEffect, useRef, useState } from "react";

const UseRefRenderCountExample = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  const renderCountRef = useRef(0);

  useEffect(() => {
    renderCountRef.current++;
    console.log(renderCountRef.current);
  });
  return (
    <div>
      <h2>useRef - Count of Renders</h2>
      <p>Counter: {count}</p>
      <input
        placeholder="Enter the text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type="text"
      />
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
      <button onClick={() => renderCountRef.current++}>
        {renderCountRef.current}
      </button>
    </div>
  );
};
export default UseRefRenderCountExample;
