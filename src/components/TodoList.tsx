import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../redux";
import {LogoutButton} from "./LogoutButton";

export const TodoList:React.FC = () => {
    let todos = localStorage.getItem('todos');
    const todosUpdate = useSelector((state: RootState) => state.todosUpdated)

    React.useEffect(() => {
        todos = localStorage.getItem('todos')
    }, [todosUpdate])

    return (
        <div className="todo-list">
            {todos ? <ul>
                {JSON.parse(todos).map((todo: string, key: number) => <li key={key}>{todo}</li> )}
        </ul>: <h3>You don't have any todos</h3>}

    </div>
    )
}
