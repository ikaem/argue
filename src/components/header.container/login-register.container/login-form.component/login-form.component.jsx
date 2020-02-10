import React from "react";

import classes from "./login-form.module.css";

const LoginForm = ({ 
    email, 
    password, 
    handleChange, 
    handleSubmit,
    loginOrRegister }) => {
        
    return (
    <form 
        className={classes.loginForm}
        onSubmit={handleSubmit}>
        <div className={classes.loginEmailDiv}>
            <label 
                className={classes.loginEmailLabel}
                htmlFor="loginEmail">Email</label>
            <input 
                required
                className={classes.loginEmailInput}
                type="email"
                name="email"
                id="loginEmail"
                value={email}
                onChange={handleChange}/>
        </div>

        <div className={classes.loginPasswordDiv}>
            <label 
                className={classes.loginPasswordLabel}
                htmlFor="loginPassword">Password</label>
            <input 
                required
                className={classes.loginPasswordInput}
                type="password"
                name="password"
                id="loginPassword"
                value={password}
                onChange={handleChange}/>
        </div>

        <div className={classes.loginButtons}>
            <button 
                type="button"
                className={classes.buttonRegisterInstead}
                onClick={loginOrRegister}>Register Instead?</button>
            <button 
                className={classes.loginButton}
                type="submit">Login</button>
        </div>
    </form>
    )
}
export default LoginForm;