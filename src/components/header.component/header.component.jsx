import React from "react";

import classes from "./header.module.css";

import Search from "./search.component/search.component";
import LogoNav from "./logo-nav.component/logo-nav.component";
import LoginRegister from "./login-register.container/login-register.container";
import LoggedProfile from "./logged-profile.component/logged-profile.component";

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