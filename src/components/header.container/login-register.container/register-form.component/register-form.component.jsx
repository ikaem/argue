import React from "react";

import classes from "./register-form.module.css";

const RegisterForm = ({ 
    name, 
    email, 
    password, 
    repeatPassword, 
    handleChange, 
    handleSubmit, 
    loginOrRegister }) => {

    return (
    <form 
    className={classes.registerForm}
    onSubmit={handleSubmit}>
        <div className={classes.registerNameDiv}>
            <label 
                className={classes.registerNameLabel}
                htmlFor="name">Name</label>
            <input 
                required
                className={classes.registerNameInput}
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={handleChange}/>
        </div>
        <div className={classes.registerEmailDiv}>
            <label 
                className={classes.registerEmailLabel}
                htmlFor="registerEmail">Email</label>
            <input 
                required
                className={classes.registerEmailInput}
                type="email"
                name="email"
                id="registerEmail"
                value={email}
                onChange={handleChange}/>
        </div>

        <div className={classes.registerPasswordDiv}>
            <label 
                className={classes.registerPasswordLabel}
                htmlFor="registerPassword">Password</label>
            <input 
                required
                className={classes.registerPasswordInput}
                type="password"
                name="password"
                id="registerPassword"
                value={password}
                onChange={handleChange}/>
        </div>

        <div className={classes.registerRepeatPasswordDiv}>
            <label 
                className={classes.registerRepeatPasswordLabel}
                htmlFor="repeatPassword">Repeat Password</label>
            <input 
                required
                className={classes.registerRepeatPasswordInput}
                type="password"
                name="repeatPassword"
                id="repeatPassword"
                value={repeatPassword}
                onChange={handleChange}/>
        </div>

        <div className={classes.registerButtons}>
            <button 
                className={classes.buttonLoginInstead}
                onClick={loginOrRegister}>Login Instead?</button>
            <button 
                className={classes.registerButton}
                type="submit">Register</button>
        </div>
    </form>
    )
}
export default RegisterForm;