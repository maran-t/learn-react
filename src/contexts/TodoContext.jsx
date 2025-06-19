import { createContext, useContext, useState } from "react";

export const TodoContext = createContext();


export const TodoProvider = ({children}) => {
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

    return <TodoContext.Provider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
        {children}
    </TodoContext.Provider>
};

export const useTodo = () => {
    return useContext(TodoContext);
}