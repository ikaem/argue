import React from "react";

import classes from "./footer.module.css";

import Tech from "../tech.component/tech.component";
import Contact from "../contact.component/contact.component";

const Footer = (props) => {
    return (
    <footer id="about" className={`grid ${classes.footer}`}>
        <Tech/>
        <Contact/>
    </footer>
    )
}

export default Footer;