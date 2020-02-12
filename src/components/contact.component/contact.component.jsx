import React from "react";

import classes from "./contact.module.css";

const Contact = (props) => {
    return (
    <section className={classes.contact}>
        <h3>Contact</h3>
        <ul className={classes.contactList}>
            <li><a href="http://www.google.com">Twitter</a></li>
            <li><a href="http://www.google.com">LinkedIn</a></li>
            <li><a href="http://www.google.com">Github</a></li>
            <li><a href="http://www.google.com">Web</a></li>
            <li><a href="http://www.google.com">@Gmail</a></li>
        </ul>
    </section>
    )
}

export default Contact;