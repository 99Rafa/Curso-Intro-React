import { createContext, useState } from "react";

import { useLocalStorage } from "src/lib/hooks/useLocalStorage";

const TodoContext = createContext();

const TodoProvider = (props) => {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1");
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

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

  const addTodo = (text) => {
    todos.push({
      completed: false,
      text,
    });
    saveTodos(todos);
  };

  const completeTodo = (text) => {
    const todo = todos.find((t) => t.text === text);
    todo.completed = !todo.completed;
    saveTodos([...todos]);
  };

  const deleteTodo = (text) => {
    saveTodos(todos.filter((todo) => todo.text !== text));
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        addTodo,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
