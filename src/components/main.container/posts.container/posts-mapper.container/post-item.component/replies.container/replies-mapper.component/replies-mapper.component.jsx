import React from "react";

import classes from "./replies-mapper.module.css";

import ReplyItem from "./reply-item.component/reply-item.component";

const RepliesMapper = ({replies, setFetchRepliesTrigger}) => {
    return (
    <ul className={classes.repliesMapper}>
        {replies.map(reply => 
            <ReplyItem
                key={reply.id}
                reply={reply}
                setFetchRepliesTrigger={setFetchRepliesTrigger}/>
        )}
    </ul>
    )
}

export default RepliesMapper;