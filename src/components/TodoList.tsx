import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../redux";

export const TodoList:React.FC = () => {
    let todos = localStorage.getItem('todos');
    const todosUpdate = useSelector((state: RootState) => state.todosUpdated)

    React.useEffect(() => {
        todos = localStorage.getItem('todos')
        console.log('updating todos......')
    }, [todosUpdate])

    return (
        <div className="todo-list">
        <ul>
            {todos && JSON.parse(todos).map((todo: string) => <li>{todo}</li> )}
        </ul>
    </div>
    )
}
