import React from "react";
import {LogoutButton, TodoForm, TodoList} from "../components";

import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom'
import {RootState} from "../redux";
import {setIsLoggedIn} from "../redux/slices";

export const Todo: React.FC = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isLoggedIn = useSelector((state: RootState) => state.isLoggedIn)

    React.useEffect(() => {
        const login = localStorage.getItem('login')
        const password = localStorage.getItem('password')
        if(!login || !password){
            dispatch(setIsLoggedIn(false))
            navigate('/')
        }else{
            dispatch(setIsLoggedIn(true))
        }
    }, [isLoggedIn])

    return (
        <div className="container">
            <TodoForm/>
            <TodoList/>
            <LogoutButton/>
        </div>
    )
}
