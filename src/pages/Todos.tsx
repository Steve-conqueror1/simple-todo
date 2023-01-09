import React from "react";
import {TodoForm, TodoList} from "../components";

export const Todo: React.FC = () => {
    return (
        <div className="container">
            <TodoForm/>
         <TodoList/>
        </div>
    )
}
