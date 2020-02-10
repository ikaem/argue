import React, { useState } from "react";

import classes from "./edit-reply.module.css";
import notify from "../../../../../../../../../utils/notify";

import EditEntryItemForm from "../../../../../../../../../elements/edit-entry-item-form.component/edit-entry-item-form.component";

const EditReply = ({reply, editUneditReply, setFetchRepliesTrigger}) => {
    const { id, text } = reply;
    const [replyTextForUpdate, setReplyTextForUpdate] = useState(text);
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
        <EditEntryItemForm
            textForUpdate={replyTextForUpdate}
            isCancelEditBoxOpen={isCancelEditReplyBoxOpen}
            openCloseCancelEditBox={openCloseCancelEditReplyBox}
            editUneditEntryItem={editUneditReply}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
    </>
    )
}
export default EditReply;


/* 
<EditReplyForm
    replyTextForUpdate={replyTextForUpdate}
    isCancelEditReplyBoxOpen={isCancelEditReplyBoxOpen}
    openCloseCancelEditReplyBox={openCloseCancelEditReplyBox}
    editUneditReply={editUneditReply}
    handleChange={handleChange}
    handleSubmit={handleSubmit}
/>
*/