import React, { useState } from "react";

import notify from "../../utils/notify";

import NewEntryItemForm from "../../components/new-entry-item-form.component/new-entry-item-form.component";

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
        try {
            // const newReplyResponse = await fetch("http://localhost:4000/newreply", {
            const newReplyResponse = await fetch("https://secure-brook-13170.herokuapp.com/newreply", {
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