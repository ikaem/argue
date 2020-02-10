import React from "react";

import classes from "./contact.module.css";

const Contact = (props) => {
    return (
    <section className={classes.contact}>
        <h3>Contact</h3>
        <ul className={classes.contactList}>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Github</a></li>
            <li><a href="#">Web</a></li>
            <li><a href="#">@Gmail</a></li>
        </ul>
    </section>
    )
}

export default Contact;