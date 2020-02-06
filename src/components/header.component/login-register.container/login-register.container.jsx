import React, { useState, useEffect, useContext } from "react";

import { UserContext } from "../../../contexts/UserContext";
import classes from "./login-register.module.css";

import LoginForm from "./login-form.component/login-form.component";
import RegisterForm from "./register-form.component/register-form.component";

const LoginRegister = (props) => {
    const {
        user, 
        loginUser, 
        renewTokenTrigger,
        setRenewTokenTrigger,
        renewAccessToken, 
        logoutUser,
        registerUser } = useContext(UserContext);

    const [isLogin, setIsLogin] = useState(true);

    const [logUser, setLogUser] = useState({
        name: "", 
        email: "", 
        password: "", 
        repeatPassword: ""});
    const { name, email, password, repeatPassword } = logUser;

    const handleChange = (event) => {
        setLogUser({...logUser, [event.target.name]: event.target.value})
    }
    const handleSubmit = async(event) => {
        event.preventDefault();
        isLogin? loginUser(email, password): registerUser(name, email, password, repeatPassword);
        setLogUser({
            name: "", 
            email: "", 
            password: "", 
            repeatPassword: ""})
    }
    const onLogout = () => {
        logoutUser();
    }

    useEffect(() => {
        setLogUser({
            name: "", 
            email: "", 
            password: "", 
            repeatPassword: ""})
    }, [isLogin]);

    useEffect(() => {
        renewAccessToken();
        //scheduling next renewal of access token
        const renewTokenTimeoutID = setTimeout(() => {
            setRenewTokenTrigger(prevRenewTokenTrigger => prevRenewTokenTrigger + 1);
        }, 40000);
        return () => clearTimeout(renewTokenTimeoutID);
    }, [renewTokenTrigger]);

    return (
    <section className={classes.loginRegister}>
        {isLogin?
            (<LoginForm
                email={email}
                password={password}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                setIsLogin={setIsLogin}
                />):
            (<RegisterForm
                name={name}
                email={email}
                password={password}
                repeatPassword={repeatPassword}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                setIsLogin={setIsLogin}
                />)  
        }
    </section>
    )
}
export default LoginRegister;
