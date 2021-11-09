import { forwardRef } from "react";

import "./SearchBar.scss";

const SearchBar = forwardRef((props, ref) => {
  const { placeholder, handleChange, handleReset, handleEnterPress } = props;
  return (
    <form className="search-bar">
      <input
        className="search-bar__input"
        type="search"
        placeholder={placeholder}
        onKeyPress={handleEnterPress}
        ref={ref}
      />
      <button onClick={handleChange} className="search-bar__button">
        Search
      </button>
      <button onClick={handleReset} className="search-bar__button">
        Reset
      </button>
    </form>
  );
});

export default SearchBar;
