import React from "react";

import classes from "./footer.module.css";

const Footer = (props) => {
    return (
    <footer className={classes.footer}> 
        <h1 className={classes.footerTitle}>Argue is an exercise project made with:</h1>
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
    </footer>
    )
}
export default Footer;