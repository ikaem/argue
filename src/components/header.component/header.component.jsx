import React, { useContext } from "react";

import classes from "./header.module.css";
import { UserContext } from "../../contexts/UserContext";

import LoginRegister from "../../containers/login-register.container/login-register.container";
import LoggedProfile from "../../containers/logged-profile.container/logged-profile.container";
import LogoNav from "../logo-nav.component/logo-nav.component";
import Search from "../../containers/search.container/search.container";

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