import React from "react";

import classes from "./new-reply-form.module.css";

const NewReplyForm = ({ newReply, isCancelReplyBoxOpen, openCloseCancelReplyBox, cancelReply, handleChange, handleSubmit }) => {
    return (
    <form 
        className={classes.newReplyForm}
        onSubmit={handleSubmit}>
        <label 
            className={classes.newReplyLabel}
            htmlFor="newReplyInput">Reply to Post Author
        </label>
        <textarea 
            required
            className={classes.newReplyInput}
            name="newReplyInput" 
            id="newReplyInput" 
            cols="30" rows="10"
            value={newReply}
            onChange={handleChange}
            />
        <div className={classes.newReplyButtons}>
            {isCancelReplyBoxOpen && <>
                <p>Cancel Reply?</p>
                <button 
                    type="button"
                    onClick={cancelReply}>Yes</button>
                <button 
                    type="button"
                    className={classes.pushMarginRightButton}
                    onClick={openCloseCancelReplyBox}>No</button>
            </>}
            {!isCancelReplyBoxOpen && 
                <button 
                    type="button"
                    onClick={openCloseCancelReplyBox}>Cancel</button>
            }
            <button>Reply</button>
        </div>
    </form>
    )
}

export default NewReplyForm;