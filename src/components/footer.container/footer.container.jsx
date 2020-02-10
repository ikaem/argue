import React from "react";

import classes from "./footer.module.css";

import Tech from "./tech.presentation/tech.presentation";
import Contact from "./contact.presentation/contact.presentation";

const Footer = (props) => {
    return (
    <footer id="about" className={`grid ${classes.footer}`}>
        <Tech/>
        <Contact/>
    </footer>
    )
}

export default Footer;