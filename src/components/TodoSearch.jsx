import React from "react";

function TodoSearch({ searchValue, setSearchValue }) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <input
        className="TodoSearch"
        type="text"
        placeholder="Cebolla"
        value={searchValue}
        onChange={onSearchValueChange}
      />
    </>
  );
}

export { TodoSearch };
