import React, {ChangeEvent, FormEvent} from "react";
import {setIsLoggedIn} from './../redux/slices'
import {useDispatch} from "react-redux";

interface LoginProps{
    login: string;
    password: string
}
export const LoginForm:React.FC = () => {
    const [credentials, setCredentials] = React.useState<LoginProps>({login:'', password:''});
    const dispatch = useDispatch()

    const handleChange = (event:  ChangeEvent<HTMLInputElement>) => {
        setCredentials({...credentials, [event.currentTarget.name]: event.currentTarget.value})
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        localStorage.setItem('login', credentials.login)
        localStorage.setItem('password', credentials.password)
        dispatch(setIsLoggedIn(true))
    }

    return (
        <div className="login-form">
        <form onSubmit={handleSubmit}>
            <div className="label">
                <label htmlFor="login">Login</label>
            </div>
            <div className="input">
                <input name='login' id="login" type="text" placeholder='Login' required value={credentials.login} onChange={handleChange}/>
            </div>
            <div className="label">
                <label htmlFor="password">Password</label>
            </div>
            <div className="input">
                <input name='password' id="password" type="text" placeholder='Password' required value={credentials.password} onChange={handleChange}/>
            </div>
          <div className="button">
              <button type="submit">Login</button>
          </div>
    </form>
        </div>
    )
}
