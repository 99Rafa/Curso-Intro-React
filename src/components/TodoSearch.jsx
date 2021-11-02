import React, { useContext } from "react";

import { TodoContext } from "src/lib/context";

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);

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
