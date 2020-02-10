import React, { useState } from "react";

import classes from "./reply-item.module.css";
import notify from "../../../../../../../../utils/notify";

import ReplyActual from "./reply-actual.component/reply-actual.component";
import EditReply from "./edit-reply.container/edit-reply.container";

const ReplyItem = ({reply, setFetchRepliesTrigger}) => {
    const { id } = reply;
    const [isReplyForEdit, setIsReplyForEdit] = useState(false);
    const [isDeleteReplyBoxOpen, setIsDeleteReplyBoxOpen] = useState(false);

    const editUneditReply = () => {
        setIsReplyForEdit(prevIsReplyForEdit => !prevIsReplyForEdit);
    }
    const openCloseDeleteReplyBox = () => {
        setIsDeleteReplyBoxOpen(prevIsDeleteReplyBoxOpen => !prevIsDeleteReplyBoxOpen);
    }

    const deleteReply = async () => {
        try {
            const deleteReplyResponse = await fetch(`http://localhost:4000/deletereply/${id}`, {
                method: "delete",
                headers: {
                    "Content-Type": "application/json",
                    // authorization: `Bearer ${user.accessToken}`,
                },
            });
            const parsedDeleteReplyResponse = await deleteReplyResponse.json();
            console.log(parsedDeleteReplyResponse);
            if(parsedDeleteReplyResponse.message !== "reply deleted successfully") throw new Error(parsedDeleteReplyResponse.message);
            setFetchRepliesTrigger(prevTrigger => prevTrigger + 1);
            notify(parsedDeleteReplyResponse.message, "success");
        }
        catch (error) {
            console.log(error);
            notify(error.message, "error");
        }
    }

    return (
    <li className={classes.replyItem}>
        {isReplyForEdit? 
            <EditReply
                reply={reply}
                editUneditReply={editUneditReply}
                setFetchRepliesTrigger={setFetchRepliesTrigger}
            />:
            <ReplyActual
                reply={reply}
                editUneditReply={editUneditReply}
                openCloseDeleteReplyBox={openCloseDeleteReplyBox}
                isDeleteReplyBoxOpen={isDeleteReplyBoxOpen}
                deleteReply={deleteReply}
            />
        }
    </li>
    )
}
export default ReplyItem;