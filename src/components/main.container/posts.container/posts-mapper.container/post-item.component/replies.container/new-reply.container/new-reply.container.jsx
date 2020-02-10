import React, { useState } from "react";

import classes from "./new-reply.module.css";
import notify from "../../../../../../../utils/notify";
import { UserContext } from "../../../../../../../contexts/UserContext";

import NewReplyForm from "./new-reply-form.component/new-reply-form.component";
import NewEntryItemForm from "../../../../../../../elements/new-entry-item-form.component/new-entry-item-form.component";

const NewReply = ({postId, setFetchRepliesTrigger}) => {
    const [newReply, setNewReply] = useState("");
    const [isCancelReplyBoxOpen, setIsCancelReplyBoxOpen] = useState(false);
    console.log(postId);

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
        try {
            const newReplyResponse = await fetch("http://localhost:4000/newreply", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    // authorization: `Bearer ${user.accessToken}`
                },
                body: JSON.stringify({replyBody: newReply, postId: postId})
            });
            const parsedNewReplyResponse = await newReplyResponse.json();
            if(parsedNewReplyResponse.message !== "new reply successfully created") throw new Error(parsedNewReplyResponse.message);
            setFetchRepliesTrigger(prevTrigger => prevTrigger + 1);
            setNewReply("");
            notify(parsedNewReplyResponse.message, "success");
        }
        catch (error) {
            console.log(error);
            notify(error.message, "error");
        }
    }
    return (
    <>
        <NewEntryItemForm
            newEntryItem={newReply}
            isCancelBoxOpen={isCancelReplyBoxOpen}
            openCloseCancelBox={openCloseCancelReplyBox}
            cancelNewEntryItem={cancelReply}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
    </>
    )
}

export default NewReply;

/* 
<NewReplyForm
    newReply={newReply}
    isCancelReplyBoxOpen={isCancelReplyBoxOpen}
    openCloseCancelReplyBox={openCloseCancelReplyBox}
    cancelReply={cancelReply}
    handleChange={handleChange}
    handleSubmit={handleSubmit}
/>
*/