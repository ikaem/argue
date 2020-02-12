import React, { useState, useContext } from "react";

import classes from "./reply-item.module.css";
import notify from "../../utils/notify";
import { UserContext } from "../../contexts/UserContext";

import EditReply from "../edit-reply.container/edit-reply.container";
import EntryItemActual from "../../components/entry-item-actual.component/entry-item-actual.component";

const ReplyItem = ({reply, setFetchRepliesTrigger}) => {
    const { loggedUser } = useContext(UserContext);
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
            // const deleteReplyResponse = await fetch(`http://localhost:4000/deletereply/${id}`, {
            const deleteReplyResponse = await fetch(`https://secure-brook-13170.herokuapp.com/deletereply/${id}`, {
                method: "delete",
                headers: {
                    "Content-Type": "application/json",
                    // authorization: `Bearer ${user.accessToken}`,
                },
            });
            const parsedDeleteReplyResponse = await deleteReplyResponse.json();
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
            <EntryItemActual
                entryItem={reply}
                editUneditEntryItem={editUneditReply}
                openCloseDeleteBox={openCloseDeleteReplyBox}
                isDeleteBoxOpen={isDeleteReplyBoxOpen}
                deleteEntryItem={deleteReply}
                loggedUser={loggedUser}
            />
        }
    </li>
    )
}

export default ReplyItem;