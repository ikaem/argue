import React from "react";

import classes from "./user-content.module.css";

const UserContent = (props) => {
    return (
    <div className={classes.userContent}>
        <div className={classes.welcomeBox}>
            <h1 className={classes.greeting}>Welcome User!</h1>
            <div className={classes.profileOptions}>
                <p className={classes.myProfile}>My Profile</p>
                <p className={classes.myPosts}>My Posts</p>
            </div>
        </div>
        <img className={classes.profilePicture} src="https://placeimg.com/69/69/people" alt="profile picture"/>
    </div>
    )
}
export default UserContent;