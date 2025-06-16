import { useState } from "react";
import { useTodo } from "../contexts"


export const TodoForm = () => {
    const [todo, setTodo] = useState("")
    const { addTodo } = useTodo();

    const handleSubmit = () => {
        addTodo({ todo });
    }

    return (
        <>
            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="Enter your todo"/>
            <button onClick={() => handleSubmit()}>Add</button>
        </>
    )
}