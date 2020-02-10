import React, { useState, useContext } from "react";

import classes from "./login-register.module.css";
import notify from "../../../utils/notify";
import { UserContext } from "../../../contexts/UserContext";

import LoginForm from "./login-form.component/login-form.component";
import RegisterForm from "./register-form.component/register-form.component";

const LoginRegister = (props) => {
    const { loggedUser, setLoggedUser } = useContext(UserContext)
    const [isLogin, setIsLogin] = useState(true);
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        repeatPassword: "",
    })

    const loginOrRegister = () => {
        setIsLogin(prevIsLogin => !prevIsLogin);
        setUser({name: "", email: "", password: "", repeatPassword: ""});
    }
    const login = async () => {
        try {
            const loginResponse = await fetch(`http://localhost:4000/login`, {
                method: "post",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email: user.email, password: user.password})
            });
            const parsedLoginResponse = await loginResponse.json();
            if(parsedLoginResponse.message !== "user successfully logged in") throw new Error(parsedLoginResponse.message);
            setLoggedUser({
                id: JSON.parse(atob(parsedLoginResponse.data.split(".")[1])).id, 
                name: JSON.parse(atob(parsedLoginResponse.data.split(".")[1])).name, 
                accessToken: parsedLoginResponse.data
            })
            notify(parsedLoginResponse.message, "success");
        }
        catch (error) {
            console.log(error);
            notify(error.message, "error");
        }
    }
    const register = async () => {
        try {
            const registerResponse = await fetch(`http://localhost:4000/register`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user)
            });
            const parsedRegisterResponse = await registerResponse.json();
            if(parsedRegisterResponse.message !== "new user successfully registered. please login") throw new Error(parsedRegisterResponse.message);
            notify(parsedRegisterResponse.message, "success");
        }
        catch (error) {
            console.log(error);
            notify(error.message, "error");
        }
    }

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        isLogin? login(): register();
    }
    return (
    <section className={classes.loginRegister}>
        {isLogin? 
        <LoginForm
            {...user}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            loginOrRegister={loginOrRegister}
        />:
        <RegisterForm
            {...user}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            loginOrRegister={loginOrRegister}
        />}
    </section>
    )
}

export default LoginRegister;