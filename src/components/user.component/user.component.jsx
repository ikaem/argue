import React, { useContext } from "react";

import { UserContext } from "../../contexts/UserContext";
import classes from "./user.module.css";

const User = (props) => {
    const { user } = useContext(UserContext);

    return (
    <section className={classes.user}>
        <div className={classes.welcomeBox}>
            <h1 className={classes.greeting}>Welcome {user.name? user.name: "Guest"}!</h1>
            {user.name && <div className={classes.profileOptions}>
                <p className={classes.myProfile}>My Profile</p>
                <p className={classes.myPosts}>My Posts</p>
            </div>}
        </div>
        {user.name && <img className={classes.profilePicture} src="https://placeimg.com/69/69/people" alt="profile picture"/>}
    </section>
    )
}
export default User;