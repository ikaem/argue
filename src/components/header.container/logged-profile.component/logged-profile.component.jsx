import React from "react";

import classes from "./logged-profile.module.css";

const LoggedProfile = (props) => {
    return (
        <section className={classes.LoggedProfile}>
            <img 
                className={classes.LoggedUserAvatar}
                src="https://placeimg.com/69/69/people" 
                alt="logged user avatar"/>
            <button>Logout</button>
        </section>
    )
}
export default LoggedProfile;