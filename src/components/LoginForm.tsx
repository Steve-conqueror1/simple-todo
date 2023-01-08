export const LoginForm = () => {
    return (
        <div className="login-form">
        <form>
            <div className="label">
                <label htmlFor="login">Login</label>
            </div>
            <div className="input">
                <input id="login" type="text" placeholder='Login'/>
            </div>
            <div className="label">
                <label htmlFor="password">Password</label>
            </div>
            <div className="input">
                <input id="password" type="text" placeholder='Password'/>
            </div>
          <div className="button">
              <button type="submit">Login</button>
          </div>
    </form>
        </div>
    )
}
