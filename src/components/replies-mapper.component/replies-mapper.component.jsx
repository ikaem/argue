import React from "react";

import classes from "./replies-mapper.module.css";

import ReplyItem from "../../../../../../reply-item.container/reply-item.container";

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