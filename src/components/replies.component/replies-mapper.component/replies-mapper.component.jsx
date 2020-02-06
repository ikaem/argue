import React, { useState, useContext } from "react";

import classes from "./replies-mapper.module.css";
import { ReplyContext } from "../../../contexts/ReplyContext";
import { replies } from "../../../assets/fakeDB";

import Reply from "./reply.component/reply.component";
import EditReply from "./edit-reply.component/edit-reply.container";

const RepliesMapper = (props) => {
    const [replyForEdit, setReplyForEdit] = useState(null)
    const { postForReplies } = useContext(ReplyContext);

    return (
    <ul className={classes.repliesMapper}>
        {replies.filter(reply => reply.postId === postForReplies).map(reply => reply.id !== replyForEdit? 
            <Reply 
                reply={reply} 
                setReplyForEdit={setReplyForEdit}/>: 
            <EditReply
                reply={reply}
                setReplyForEdit={setReplyForEdit}
            />)}
    </ul>
    )
}
export default RepliesMapper;
