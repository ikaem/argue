import React, { createContext, useState, useEffect } from "react";
import notify from "../utils/notify";

export const UserContext = createContext();

const UserContextProvider = ({children}) => {
    const [loggedUser, setLoggedUser] = useState({id: "", name: "guest", accessToken: ""});
    const [renewTokenTrigger, setRenewTokenTrigger] = useState(0);

    const renewToken = async () => {
        try {
            const renewTokenResponse = await fetch(`http://localhost:4000/renewaccesstoken`, {
                method: "post",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                    // authorization: `Bearer ${loggedUser.accessToken}`
                }
            });
            const parsedRenewTokenResponse = await renewTokenResponse.json();
            if(parsedRenewTokenResponse.message !== "user successfully logged in") throw new Error(parsedRenewTokenResponse.message);
            setLoggedUser({
                id: JSON.parse(atob(parsedRenewTokenResponse.data.split(".")[1])).id, 
                name: JSON.parse(atob(parsedRenewTokenResponse.data.split(".")[1])).name, 
                accessToken: parsedRenewTokenResponse.data
            });
            // notify("relogged in", "success");
        }
        catch (error) {
            console.log(error);
            notify(error.message, "error");
        }
    }

    useEffect(() => {
        renewToken();
        const timeoutId = setTimeout(() => {
            setRenewTokenTrigger(prevTrigger => prevTrigger + 1);
        }, 800*1000);
        return () => clearTimeout(timeoutId);
    }, [setLoggedUser, renewTokenTrigger]);

    return (
        <UserContext.Provider value={{loggedUser, setLoggedUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;