import React, { useContext } from "react";

import classes from "./header.module.css";
import { UserContext } from "../../contexts/UserContext";

import LoginRegister from "./login-register.container/login-register.container";
import LoggedProfile from "./logged-profile.component/logged-profile.component";
import LogoNav from "./logo-nav.component/logo-nav.component";
import Search from "./search.container/search.container";

const Header = (props) => {
    const { loggedUser } = useContext(UserContext);
    return (
    <header className={`grid ${classes.header}`}>
        {!loggedUser.id? (
            <LoginRegister/>):(
            <LoggedProfile/>
        )}
        <LogoNav/>
        <Search/>
    </header>
    )
}

export default Header;