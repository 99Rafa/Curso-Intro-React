import "src/App.css";
import "src/scss/main.scss";

import React, { useContext } from "react";
import { TodoContext, TodoProvider } from "src/lib/context";

import { Modal } from "src/components/Modal";
import { TodoButton } from "src/components/TodoButton";
import { TodoCounter } from "src/components/TodoCounter";
import { TodoItem } from "src/components/TodoItem";
import { TodoList } from "src/components/TodoList";
import { TodoSearch } from "src/components/TodoSearch";

function App() {
  return (
    <TodoProvider>
      <TodoCounter />

      <TodoSearch />

      <AppUi />
    </TodoProvider>
  );
}

function AppUi() {
  // useContext solo funciona si esta adentro de un provider, si no retorna undefined
  const { error, loading, searchedTodos, completeTodo, deleteTodo, openModal } =
    useContext(TodoContext);

  return (
    <>
      <TodoList>
        {error && <p>Error...</p>}
        {loading && <p>Cargando...</p>}
        {!loading && !searchedTodos.length && <p>Cargando...</p>}

        {searchedTodos.map((todo, idx) => (
          <TodoItem
            key={idx}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      {openModal && (
        <Modal>
          <p>Portal</p>
        </Modal>
      )}
      <TodoButton />
    </>
  );
}

export default App;
