import "src/App.css";
import "src/scss/main.scss";

import React, { useState } from "react";

import { TodoButton } from "src/components/TodoButton";
import { TodoCounter } from "src/components/TodoCounter";
import { TodoItem } from "src/components/TodoItem";
import { TodoList } from "src/components/TodoList";
import { TodoSearch } from "src/components/TodoSearch";
import {useLocalStorage} from "./lib/hooks/useLocalStorage";

function App() {
  const [todos, saveTodos] = useLocalStorage("TODOS_V1");
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos;

  if (searchValue.length === 0) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) =>
      todo.text.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  const completeTodo = (text) => {
    const todo = todos.find((t) => t.text === text);
    todo.completed = !todo.completed;
    saveTodos([...todos]);
  };

  const deleteTodo = (text) => {
    saveTodos(todos.filter((todo) => todo.text !== text));
  };

  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
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

      <TodoButton />
    </>
  );
}

export default App;
