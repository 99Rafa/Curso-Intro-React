import "src/App.css";
import "src/scss/main.scss";

import { TodoContext, TodoProvider } from "src/lib/context";

import React from "react";
import { TodoButton } from "src/components/TodoButton";
import { TodoCounter } from "src/components/TodoCounter";
import { TodoItem } from "src/components/TodoItem";
import { TodoList } from "src/components/TodoList";
import { TodoSearch } from "src/components/TodoSearch";

function App() {
  return (
    <>
      <TodoProvider>
        <TodoCounter />

        <TodoSearch />

        <TodoContext.Consumer>
          {({ error, loading, searchedTodos, completeTodo, deleteTodo }) => (
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
          )}
        </TodoContext.Consumer>

        <TodoButton />
      </TodoProvider>
    </>
  );
}

export default App;
