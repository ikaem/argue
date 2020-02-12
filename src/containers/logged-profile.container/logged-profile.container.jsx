import React, { useContext } from "react";

import classes from "./logged-profile.module.css";
import notify from "../../utils/notify";
import { UserContext } from "../../contexts/UserContext";

const LoggedProfile = () => {
    const { setLoggedUser } = useContext(UserContext);
    const logout = async () => {
        try {
            // const logoutResponse = await fetch("http://localhost:4000/logout", {
            const logoutResponse = await fetch("https://secure-brook-13170.herokuapp.com/logout", {
                method: "delete",
                credentials: "include",
                headers: {
                    "Content-Type": "application-json",
                },
            });
            const parsedLogoutResponse = await logoutResponse.json();
            if(parsedLogoutResponse.message !== "user logged out successfully") throw new Error(parsedLogoutResponse.message);
            setLoggedUser({id: "", name: "", accessToken: ""});
            notify(parsedLogoutResponse.message, "success");
        }
        catch (error) {
            console.log(error);
            notify(error.message, "error");
        }
    }
    
    return (
        <section className={classes.loggedProfile}>
            <img 
                className={classes.LoggedUserAvatar}
                src="https://placeimg.com/69/69/people" 
                alt="logged user avatar"/>
            <button 
                type="button"
                onClick={logout}>Logout</button>
        </section>
    )
}
export default LoggedProfile;