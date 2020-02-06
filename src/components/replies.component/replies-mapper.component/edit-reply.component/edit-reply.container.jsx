import React from "react";

import classes from "./edit-reply.module.css";

const EditReply = ({reply, setReplyForEdit}) => {
    const {replyText, replyDateCreated, replyAuthor} = reply;

    const unsetEditReply = () => {
        setReplyForEdit(null)
    }

    return (
    <li className={classes.editReplyListItem}>

        <form className={classes.editReplyFormContainer}>
            <label className={classes.editReplyInfo} htmlFor="editReplyInput">
                Edit  
                <span> {replyAuthor}</span>
                's reply from 
                <span> {replyDateCreated.toDateString().slice(4)}</span>
            </label>
            <textarea
                className={classes.editReplyInput}
                name="text"
                id="editReplyInput"
                defaultValue={replyText}
            />
            <div className={classes.editReplyButtons}>
                <p 
                    className={classes.editReplyCancel} 
                    onClick={unsetEditReply}>Cancel
                </p>
                <button 
                    className={classes.editReplySubmit}    
                    type="submit">Submit
                </button>
            </div>
        </form>
    </li>
    )
}
export default EditReply;