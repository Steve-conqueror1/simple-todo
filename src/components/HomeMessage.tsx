import {Link} from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../redux";
import {LogoutButton} from "./LogoutButton";

export const HomeMessage:React.FC = () => {
    const login = localStorage.getItem('login')

    return (
        <div>
            <h3 className="welcome">Welcome to your todos <span>{login}</span></h3>
             <Link to="/todos">Go to todos &rarr;</Link>
            <LogoutButton/>
        </div>
    )
}
