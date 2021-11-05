import React, { useContext, useRef } from "react";

import { TodoContext } from "src/lib/context";

export function TodoForm() {
  const todoText = useRef();
  const { addTodo, setOpenModal } = useContext(TodoContext);

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(todoText.current.value);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe un nuevo TODO</label>
      <textarea
        ref={todoText}
        name=""
        cols="30"
        rows="10"
        placeholder="Descripción"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          onClick={onCancel}
          className="TodoForm-button TodoForm-button-cancel"
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button-add">
          Agregar
        </button>
      </div>
    </form>
  );
}
