import ComponentC from "./ComponentC";

const ComponentB = ({ message }) => {
  return (
    <div className="second">
      <h3>Second Component</h3>
      <ComponentC message={message} />
    </div>
  );
};
export default ComponentB;
