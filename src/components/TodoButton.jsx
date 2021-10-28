import React from "react";

function TodoButton() {
  const click = () => {
    alert("Hola");
  };

  return (
    <button className="CreateTodoButton" onClick={click}>
      +
    </button>
  );
}

export { TodoButton };
