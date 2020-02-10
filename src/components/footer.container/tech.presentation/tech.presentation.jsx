import React from "react";

import classes from "./tech.module.css";

const Tech = (props) => {
    return (
    <section className={classes.tech}>
        <h3>Argue is a practice project built with: </h3>
        <ul className={classes.techList}>
            <li><a href="https://reactjs.org/">React</a></li>
            <li><a href="https://reacttraining.com/react-router/web/guides/quick-start">React Router</a></li>
            <li><a href="https://nodejs.org/en/">Node.js</a></li>
            <li><a href="https://expressjs.com/">Express</a></li>
            <li><a href="https://www.npmjs.com/package/jsonwebtoken">Jsonwebtoken</a></li>
            <li><a href="https://www.postgresql.org/">PostgreSQL</a></li>
            <li><a href="https://iconscout.com/">React Unicons by Iconscout</a></li>
            <li><a href="https://www.npmjs.com/package/react-toastify">React Toastify</a></li>
        </ul>
    </section>
    )
}

export default Tech;