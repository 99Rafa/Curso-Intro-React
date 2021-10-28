import React, { useState } from "react";

function TodoSearch() {
  const [value, setValue] = useState("");

  const onSearchValueChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <input
        className="TodoSearch"
        type="text"
        placeholder="Cebolla"
        onChange={onSearchValueChange}
      />
      <p>{value}</p>
    </>
  );
}

export { TodoSearch };
