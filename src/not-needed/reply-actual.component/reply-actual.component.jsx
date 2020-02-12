import React, { useContext } from "react";

import classes from "./reply-actual.module.css";
import { UserContext } from "../../contexts/UserContext";

const ReplyActual = ({reply, editUneditReply, openCloseDeleteReplyBox, isDeleteReplyBoxOpen, deleteReply}) => {
    const { loggedUser } = useContext(UserContext);
    const { replyText, replyAuthor, replyDateCreated, replyDateEdited } = reply;

    return (
    <article className={classes.replyActual}>
        <img 
            className={classes.replyAuthorAvatar} 
            src="https://placeimg.com/69/69/people" 
            alt="reply author avatar"/>
        <div className={classes.replyContent}>
            <p className={classes.replyAuthorDates}>
                <span>{replyAuthor}</span>
                <span> replied on {new Date(replyDateCreated).toDateString().slice(4)}</span>
                {replyDateEdited && <span> | edited {new Date(replyDateEdited).toDateString().slice(4)}</span>}
            </p>
            <p className={classes.replyText}>{replyText}</p>
            
            <div className={classes.replyButtons}>
                {isDeleteReplyBoxOpen && <>
                    <p>Delete Reply?</p>
                    <button onClick={deleteReply}>Yes</button>
                    <button
                        className={classes.pushMarginRightButton}
                        onClick={openCloseDeleteReplyBox}
                    >No</button>
                </>}
                {!isDeleteReplyBoxOpen && loggedUser.name === replyAuthor &&
                    <button
                        className={classes.cancelEditButton}
                        onClick={openCloseDeleteReplyBox}
                        >Delete
                    </button>
                }
                {loggedUser.name === replyAuthor && <button onClick={editUneditReply}>Edit</button>}
            </div>
        </div>
    </article>
    )
}
export default ReplyActual;