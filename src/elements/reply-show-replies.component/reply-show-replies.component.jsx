import React from "react";

import classes from "./reply-show-replies.module.css";

const ReplyShowReplies = ({openCloseReplies, name, author}) => {
    return(
    <>
    <button 
        onClick={openCloseReplies}>3 Replies</button>
    {name === author && 
        <button 
            onClick={openCloseReplies}>Reply</button>}
    </>
    )
}

export default ReplyShowReplies;