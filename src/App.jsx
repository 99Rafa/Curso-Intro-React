import "src/App.css";
import "src/scss/main.scss";

import React from "react";
import { TodoButton } from "src/components/TodoButton";
import { TodoCounter } from "src/components/TodoCounter";
import { TodoItem } from "src/components/TodoItem";
import { TodoList } from "src/components/TodoList";
import { TodoSearch } from "src/components/TodoSearch";

const todos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el curso de intro a React", completed: false },
  { text: "Lorrar con la llorona", completed: false },
];

function App() {
  return (
    <>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {todos.map((todo, idx) => (
          <TodoItem key={idx} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>

      <TodoButton />
    </>
  );
}

export default App;
