import React, {ChangeEvent, FormEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import { setTodosUpdated} from "../redux/slices";
import {RootState} from "../redux";

export const TodoForm: React.FC =()=> {

    const [todo, setTodo] = React.useState<string>('')
    const dispatch = useDispatch()
    const todosUpdated = useSelector((state: RootState) => state.todosUpdated)

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
        dispatch(setTodosUpdated(!todosUpdated))
    }

    return (<div className="todo-form">
        <form onSubmit={handleSubmit}>
            <input className='todo' value={todo} onChange={handleChange} type="text" required name="todo" placeholder="Type your todos..."/>
            <button type="submit">Add Todo</button>
        </form>
    </div>)
}
