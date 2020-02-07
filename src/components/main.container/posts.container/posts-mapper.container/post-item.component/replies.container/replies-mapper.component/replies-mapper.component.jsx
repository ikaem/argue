import React from "react";

import classes from "./replies-mapper.module.css";

import ReplyItem from "./reply-item.component/reply-item.component";

const RepliesMapper = (props) => {
    return (
    <ul className={classes.repliesMapper}>
        <ReplyItem/>
    </ul>
    )
}

export default RepliesMapper;