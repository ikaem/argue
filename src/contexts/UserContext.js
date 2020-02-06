import React, { useState, createContext } from "react";

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const UserContext = createContext();
toast.configure({
    position:"top-center",
    autoClose: 3000,
    hideProgressBar: false,
    newestOnTop: true,
    closeOnClick: true,
    rtl: false,
    pauseOnVisibilityChange: true,
    draggable: true,
    pauseOnHover: true,
  });

const UserContextProvider = (props) => {
    const [user, setUser] = useState({id: "", name: "", accessToken: ""})
    const [renewTokenTrigger, setRenewTokenTrigger] = useState(0);
    const notify = (message) => {
        toast(message);
    }

    const loginUser = async (email, password) => {
        try {
            const loginResponse = await fetch("http://localhost:4000/login", {
                method: "post",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email, password}),
            }); 
            const jsonedLoginResponse = await loginResponse.json();
            if(jsonedLoginResponse.message !== "user successfully logged in") throw new Error(jsonedLoginResponse.message);
            jsonedLoginResponse.message && setUser({
                id: JSON.parse(atob(jsonedLoginResponse.data.accessToken.split(".")[1])).id,
                name: JSON.parse(atob(jsonedLoginResponse.data.accessToken.split(".")[1])).name, 
                accessToken: jsonedLoginResponse.data.accessToken});
        }
        catch (error) {
            console.log(error.message);
            notify(error.message);
            // need to setup some notification in case of not being able to renew 
            // to tell user they need to log in again
        }
    }

    const registerUser = async (name, email, password, passwordAgain) => {
        try {
            console.log(password, passwordAgain);
            if(password !== passwordAgain) throw new Error("passwords do not match!")
            const registerResponse = await fetch("http://localhost:4000/register", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({name, email, password})
            });
            const jsonedRegisterResponse = await registerResponse.json();
            if(jsonedRegisterResponse.message !== "new user successfully registered. please login") throw new Error(jsonedRegisterResponse.message);
            console.log(jsonedRegisterResponse.message);
            console.log("done");
        }
        catch (error) {
            // need some notification system on front end
            console.log(error)
            notify(error.message);
        }
    }

    const logoutUser = async () => {
        const logoutResponse = await fetch("http://localhost:4000/logout", {
            method: "delete",
            credentials: "include"
        });
        const jsonedLogoutResponse = await logoutResponse.json();
        jsonedLogoutResponse.message && setUser({id: "", name: "", accessToken: ""});
        notify("user successfully logged out");
    }

    const renewAccessToken = async () => {
        try {
            const renewAccessTokenResponse = await fetch("http://localhost:4000/renewaccesstoken", {
                method: "post",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
            });
            const jsonedRenewAccssToknResp = await renewAccessTokenResponse.json();
            if(jsonedRenewAccssToknResp.message !== "user successfully logged in") throw new Error(jsonedRenewAccssToknResp.message);
            jsonedRenewAccssToknResp.message && setUser({
                id: JSON.parse(atob(jsonedRenewAccssToknResp.data.accessToken.split(".")[1])).id,
                name: JSON.parse(atob(jsonedRenewAccssToknResp.data.accessToken.split(".")[1])).name, 
                accessToken: jsonedRenewAccssToknResp.data.accessToken});;
        }
        catch (error) {
            console.log(error.message);
            // need to setup some notification in case of not being able to renew 
            // to tell user they need to log in again
        }
    }

    return (
        <UserContext.Provider value={{
            user, 
            loginUser, 
            renewTokenTrigger,
            setRenewTokenTrigger, 
            renewAccessToken, 
            logoutUser, 
            registerUser}}>
            {props.children}
        </UserContext.Provider>
    );
};
export default UserContextProvider;