import React from "react";

import classes from "./logo-nav.module.css";
import { Link } from "react-router-dom";

const LogoNav = (props) => {
    return (
    <section className={classes.logoNav}>
        <h1 className={classes.logoActual}>\Argue/</h1>
        <nav className={classes.navigation}>
            <ul className={classes.navLinksList}>
                {/* <li><a href="#about">Home</a></li> */}
                <li><Link to="/">Home</Link></li>
                <li><a href="#about">About</a></li>
                <li><a href="#topics">Topics</a></li>
            </ul>
        </nav>
    </section>
    )
}
export default LogoNav;