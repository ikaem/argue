import React, { useContext } from "react";

import { UserContext } from "../../../../contexts/UserContext";
import classes from "./reply.module.css";

const Reply = ({reply, setReplyForEdit}) => {
    const { user } = useContext(UserContext);
    const { id, postId, replyText, replyAuthor, replyDateCreated } = reply;
    const setEditReply = () => {
        setReplyForEdit(id);
    }
    return (
    <li className={classes.replyListItem}>
        <article className={classes.replyContainer}>
            <p className={classes.replyEquipment}>
                <span className={classes.replyAuthor}>Karlo</span> replied on 
                <span className={classes.replyDate}> 22 Jan 2020</span>
            </p>
            <p className={classes.replyText}>{replyText}</p>
            <p className={classes.editedReplyDate}>Edited <span className={classes.editedReplyActualDate}> 22 Jan 2020</span></p>

            {user.name === replyAuthor && <div className={classes.replyButtons}> 
                <p className={classes.editButton} onClick={setEditReply}>Edit</p>
                <p className={classes.deleteButton}>Delete</p>
            </div>}
        </article>
    </li>
    )
}
export default Reply;