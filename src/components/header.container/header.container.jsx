import React from "react";

import classes from "./header.module.css";

import LoginRegister from "./login-register.container/login-register.container";
import LoggedProfile from "./logged-profile.component/logged-profile.component";
import LogoNav from "./logo-nav.component/logo-nav.component";
import Search from "./search.container/search.container";

const Header = (props) => {
    return (
    <header className={`grid ${classes.header}`}>
        <LoginRegister/>
        <LoggedProfile/>
        <LogoNav/>
        <Search/>
    </header>
    )
}

export default Header;