import React, { useState, createContext } from "react";

export const ReplyContext = createContext();

const ReplyContextProvider = (props) => {
    const [postForReplies, setPostForReplies] = useState(null);

    return (
        <ReplyContext.Provider value={{
            isReplyMode: props.isReplyMode,
            setIsReplyMode: props.setIsReplyMode,
            postForReplies, 
            setPostForReplies}}>
            {props.children}
        </ReplyContext.Provider>
    )
}
export default ReplyContextProvider;