import React from "react";

import classes from "./reply-item.module.css";

import ReplyActual from "./reply-actual.component/reply-actual.component";
import EditReply from "./edit-reply.container/edit-reply.container";

const ReplyItem = (props) => {
    return (
    <li className={classes.replyItem}>
        <ReplyActual/>
        <EditReply/>
    </li>
    )
}
export default ReplyItem;