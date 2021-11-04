import React, { useContext } from "react";

import { TodoContext } from "src/lib/context";

function TodoButton() {
  const { setOpenModal } = useContext(TodoContext);

  const click = () => {
    setOpenModal((value) => !value);
  };

  return (
    <button className="CreateTodoButton" onClick={click}>
      +
    </button>
  );
}

export { TodoButton };
