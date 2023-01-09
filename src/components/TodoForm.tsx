import React, {ChangeEvent, FormEvent} from "react";

export const TodoForm: React.FC =()=> {

    const [todo, setTodo] = React.useState<string>('')

    const handleChange = (event: ChangeEvent<HTMLInputElement>) =>{
        setTodo(event.currentTarget.value)
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const storedTodos = localStorage.getItem('todos')
        if(!storedTodos){
            localStorage.setItem('todos', JSON.stringify([todo]))
        }else{
            localStorage.setItem('todos', JSON.stringify([...JSON.parse(storedTodos), todo]))
        }
        setTodo('')
    }

    return (<div className="todo-form">
        <form onSubmit={handleSubmit}>
            <input className='todo' value={todo} onChange={handleChange} type="text" required name="todo" placeholder="Type your todos..."/>
            <button type="submit">Add Todo</button>
        </form>
    </div>)
}
