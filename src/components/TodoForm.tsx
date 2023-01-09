import React, {FormEvent} from "react";

export const TodoForm: React.FC =()=> {

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log("todo added")
    }
    return (<div className="todo-form">
        <form onSubmit={handleSubmit}>
            <input className='todo' type="text" required name="todo" placeholder="Type your todos..."/>
            <button type="submit">Add Todo</button>
        </form>
    </div>)
}
