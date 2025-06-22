import { useEffect, useState } from 'react';
import './App.css';
import { TodoProvider, useTodo } from './contexts';
import { TodoForm } from './components/TodoForm';
import { TodoItem } from './components/TodoItem';

function App() {
  return (
    <TodoProvider>
      <TodoForm>
        <TodoItem />
      </TodoForm>
    </TodoProvider>
  )
}

export default App;
