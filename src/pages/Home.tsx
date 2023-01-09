import {HomeMessage, LoginForm} from "../components";
import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../redux";


export const Home = () => {
    const isLoggedIn = useSelector((state: RootState) => state.isLoggedIn)
    return (
        <div className="container">
            {isLoggedIn?
            <HomeMessage/>:
            <LoginForm/>}
        </div>)
}
