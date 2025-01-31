import ComponentA from "./ComponentA";

const UseContextExample = ({ message }) => {
  return (
    <div className="parent">
      <h2>useContext Example</h2>
      <ComponentA message={message} />
    </div>
  );
};
export default UseContextExample;
