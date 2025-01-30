import { useState } from "react";

const SearchBar = ({ handleSetQuery, reset }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSetQuery(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type="text"
      />
      <button>Search</button>
      <button type="button" onClick={reset}>
        Reset
      </button>
    </form>
  );
};
export default SearchBar;
