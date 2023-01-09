import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux";
import {setIsLoggedIn} from "../redux/slices";

export const LogoutButton:React.FC = ()=>{
    const isLoggedIn = useSelector((state: RootState) => state.isLoggedIn)
    const dispatch = useDispatch()

    const handleLogout = () => {
        localStorage.setItem('login', '')
        localStorage.setItem('password', '')
        dispatch(setIsLoggedIn(false))
    }

    return (
        <div className="logout">
            {isLoggedIn && <button onClick={handleLogout} type="button">Logout</button>}
        </div>
    )
}
