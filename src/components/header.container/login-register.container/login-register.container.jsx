import React from "react";

import classes from "./login-register.module.css";

import LoginForm from "./login-form.component/login-form.component";
import RegisterForm from "./register-form.component/register-form.component";

const LoginRegister = (props) => {
    return (
        <section>
            <LoginForm/>
            <RegisterForm/>
        </section>
    )
}

export default LoginRegister;