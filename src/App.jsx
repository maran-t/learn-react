import { useEffect, useState } from 'react';
import './App.css';
import { TodoProvider, useTodo } from './contexts';
import { TodoForm } from './components/TodoForm';
import { TodoItem } from './components/TodoItem';

function App() {
  // const {todos} = useTodo();

  // useEffect(() => {
  //   const todos = JSON.parse(localStorage.getItem('todos')) || [];
  //   if (todos && todos.length) {
  //     setTodos(todos);
  //   }
  // }, []);

  function abcd() {

  }



  return (
    <TodoProvider>
      <TodoForm>
        <TodoItem />
      </TodoForm>
    </TodoProvider>
  )
}

export default App;
