import React, { useState } from "react";

import classes from "./edit-reply.module.css";
import notify from "../../../../../../../../../utils/notify";

import EditReplyForm from "./edit-reply-form.component/edit-reply-form.component";

const EditReply = ({reply, editUneditReply, setFetchRepliesTrigger}) => {
    const { id, replyText } = reply;
    const [replyTextForUpdate, setReplyTextForUpdate] = useState(replyText);
    const [isCancelEditReplyBoxOpen, setIsCancelEditReplyBoxOpen] = useState(false);

    const openCloseCancelEditReplyBox = () => {
        setIsCancelEditReplyBoxOpen(isItOpen => !isItOpen);
    }

    const handleChange = (e) => {
        setReplyTextForUpdate(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updateReplyReponse = await fetch(`http://localhost:4000/editreply/${id}`, {
                method: "put",
                headers: {
                    "Content-Type": "application/json",
                    // authorization: `Beared ${user.accessToken}`,
                },
                body: JSON.stringify({replyTextForUpdate})
            });
            const parsedUpdateReplyResponse = await updateReplyReponse.json();
            if(parsedUpdateReplyResponse.message !== "reply updated successfully") throw new Error(parsedUpdateReplyResponse.message);
            setFetchRepliesTrigger(prevTrigger => prevTrigger + 1);
            editUneditReply();
            notify(parsedUpdateReplyResponse.message, "success");
        }
        catch (error) {
            console.log(error);
            notify(error.message, "error");
        }
    }
    return (
    <>
        <EditReplyForm
            replyTextForUpdate={replyTextForUpdate}
            isCancelEditReplyBoxOpen={isCancelEditReplyBoxOpen}
            openCloseCancelEditReplyBox={openCloseCancelEditReplyBox}
            editUneditReply={editUneditReply}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
    </>
    )
}
export default EditReply;