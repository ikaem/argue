import React, { useState } from "react";

import classes from "./new-reply.module.css";
import notify from "../../../../../../../utils/notify";

import NewReplyForm from "./new-reply-form.component/new-reply-form.component";

const NewReply = ({postId, setFetchRepliesTrigger}) => {
    const [newReply, setNewReply] = useState("");
    const [isCancelReplyBoxOpen, setIsCancelReplyBoxOpen] = useState(false);

    const openCloseCancelReplyBox = () => {
        setIsCancelReplyBoxOpen(isItOpen => !isItOpen);
    }

    const cancelReply = () => {
        setNewReply("");
        openCloseCancelReplyBox();
    }

    const handleChange = (e) => {
        setNewReply(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("replying...");
        setFetchRepliesTrigger(prevTrigger => prevTrigger + 1);
    }
    return (
    <>
        <NewReplyForm
            newReply={newReply}
            isCancelReplyBoxOpen={isCancelReplyBoxOpen}
            openCloseCancelReplyBox={openCloseCancelReplyBox}
            cancelReply={cancelReply}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
    </>
    )
}

export default NewReply;