import React from "react";

import classes from "./register-form.module.css";

const RegisterForm = ({ name, email, password, repeatPassword, handleChange, handleSubmit, setIsLogin }) => {

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
                htmlFor="email">Email</label>
            <input 
                required
                className={classes.registerEmailInput}
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={handleChange}/>
        </div>

        <div className={classes.registerPasswordDiv}>
            <label 
                className={classes.registerPasswordLabel}
                htmlFor="password">Password</label>
            <input 
                required
                className={classes.registerPasswordInput}
                type="password"
                name="password"
                id="password"
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
                className={`button ${classes.buttonLoginInstead}`}
                onClick={() => setIsLogin(true)}>Login Instead?</button>
            <button 
                className={`button ${classes.registerButton}`}
                type="submit">Register</button>
        </div>
    </form>
    )
}
export default RegisterForm;