import React, { useEffect } from "react";

import classes from "./login-form.module.css";

const LoginForm = ({ 
    email, 
    password, 
    handleChange, 
    handleSubmit,
    setIsLogin }) => {
        
    return (
    <form 
        className={classes.loginForm}
        onSubmit={handleSubmit}>
        <div className={classes.loginEmailDiv}>
            <label 
                className={classes.loginEmailLabel}
                htmlFor="email">Email</label>
            <input 
                required
                className={classes.loginEmailInput}
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={handleChange}/>
        </div>

        <div className={classes.loginPasswordDiv}>
            <label 
                className={classes.loginPasswordLabel}
                htmlFor="password">Password</label>
            <input 
                required
                className={classes.loginPasswordInput}
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={handleChange}/>
        </div>

        <div className={classes.loginButtons}>
            <button 
                className={`button ${classes.buttonRegisterInstead}`}
                onClick={() => setIsLogin(false)}>Register Instead?</button>
            <button 
                className={`button ${classes.loginButton}`}
                type="submit">Login</button>
        </div>
    </form>
    )
}
export default LoginForm;