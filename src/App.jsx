import { useEffect, useState } from 'react';
import './App.css';
import { TodoProvider } from './contexts';
import { TodoForm } from './components/TodoForm';
import { TodoItem } from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((todos) => [...todos, { id: Date.now(), ...todo }]);
  }

  const updateTodo = (id, todo) => {
    setTodos((todos) => todos.map(v => v.id === id ? todo : v));
  }

  const deleteTodo = (id) => {
    setTodos((todos) => todos.filter(v => v.id !== id));
  }

  const toggleComplete = (id) => {
    setTodos((todos) =>
      todos.map(v =>
        v.id === id ? { ...v, completed: !v.completed } : v
      )
    )
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    if (todos && todos.length) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    const todoList = todos && todos.length ? todos : []
    localStorage.setItem('todos', JSON.stringify(todoList));
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <TodoForm />
      <TodoItem />
    </TodoProvider>
  )
}

export default App;
