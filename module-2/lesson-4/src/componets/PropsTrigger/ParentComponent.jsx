import { useState } from "react";
import Child from "./Child";

const ParentComponent = () => {
  const [clicks, setClicks] = useState(1);
  return (
    <div>
      <h1>Hello</h1>
      <button
        onClick={() => {
          setClicks((prev) => prev + 1);
        }}
      >
        {clicks}
      </button>
      <Child clicks={clicks} />
    </div>
  );
};

export default ParentComponent;
