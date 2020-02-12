import React from "react";

import classes from "./edit-reply-form.module.css";

const EditReplyForm = ({ replyTextForUpdate, isCancelEditReplyBoxOpen, openCloseCancelEditReplyBox, editUneditReply, handleChange, handleSubmit }) => {
    return (
    <form 
        className={classes.editReplyForm}
        onSubmit={handleSubmit}>
        <label htmlFor="editReplyInput">Edit Karlo's reply from 20-02-2020</label>
        <textarea                     
            required
            className={classes.editReplyInput}
            name="editReplyInput" 
            id="editReplyInput" 
            cols="30" rows="10"
            value={replyTextForUpdate} 
            onChange={handleChange}
            />
        <div className={classes.editReplyButtons}>
            {isCancelEditReplyBoxOpen && <>
                <p>Cancel Editting The Reply?</p>
                <button 
                    type="button"
                    onClick={editUneditReply}>Yes</button>
                <button 
                    type="button"
                    className={classes.pushMarginRightButton}
                    onClick={openCloseCancelEditReplyBox}>No</button>
            </>}
            {!isCancelEditReplyBoxOpen &&
                <button 
                    type="button"
                    className={classes.cancelEditReplyButton}
                    onClick={openCloseCancelEditReplyBox}>Cancel</button>
            }
            <button>Submit</button>
        </div>
    </form>
    )
}
export default EditReplyForm;