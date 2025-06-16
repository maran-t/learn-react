import { useTodo } from "../contexts"


export function TodoItem() {
    let { todos } = useTodo();
    return (
        <div className="list-container">
            {
                todos.map((v) => {
                    return <div key={v.id}>{v.todo}</div>
                })
            }
        </div>
    )
}