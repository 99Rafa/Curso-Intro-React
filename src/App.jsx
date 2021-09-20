import 'src/App.css';

import React from 'react';
import { TodoButton } from 'src/components/TodoButton';
import { TodoCounter } from 'src/components/TodoCounter';
import { TodoItem } from 'src/components/TodoItem';
import { TodoList } from 'src/components/TodoList';
import { TodoSearch } from 'src/components/TodoSearch';

// import logo from './logo.svg';

const todos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Lorrar con la llorona', completed: false },
];

function App() {
  return (
    <>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {todos.map((todo, idx) => (
          <TodoItem key={idx} text={todo.text} />
        ))}
      </TodoList>

      <TodoButton />
    </>
  );
}

export default App;
