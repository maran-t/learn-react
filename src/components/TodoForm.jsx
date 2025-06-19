import { useEffect, useState } from "react";
import { useTodo } from "../contexts"


export const TodoForm = ({children}) => {
    const [todo, setTodo] = useState("")
    const { todos, addTodo } = useTodo();

    const handleSubmit = () => {
        addTodo({ todo });
    }

    useEffect(() => {
        const todoList = todos && todos.length ? todos : []
        localStorage.setItem('todos', JSON.stringify(todoList));
  }, [todos])

    return (
        <>
            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="Enter your todo"/>
            <button onClick={() => handleSubmit()}>Add</button>
            {children}
        </>
    )
}