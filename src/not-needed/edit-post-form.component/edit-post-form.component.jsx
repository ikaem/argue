import React from "react";

import classes from "./edit-post-form.module.css";

const EditPostForm = ({ textForUpdate, isCancelEditBoxOpen, openCloseCancelEditBox, editUneditPost, handleChange, handleSubmit }) => {
    
    return (
    <form 
        className={classes.editPostForm}
        onSubmit={handleSubmit}>
        <label htmlFor="editPostInput">Edit Karlo's post from 20-02-2020</label>
        <textarea                     
            required
            className={classes.editPostInput}
            name="editPostInput" 
            id="editPostInput" 
            cols="30" rows="10"
            value={textForUpdate} 
            onChange={handleChange}
            />
        <div className={classes.editPostButtons}>
            {isCancelEditBoxOpen && <>
                <p>Cancel Editing The Post?</p>
                <button
                    type="button"
                    onClick={editUneditPost}>Yes</button>
                <button 
                    type="button"
                    className={classes.pushMarginRightButton}
                    onClick={openCloseCancelEditBox}>No</button>
            </>}
            {!isCancelEditBoxOpen &&
                <button 
                    type="button"
                    className={classes.cancelEditButton}
                    onClick={openCloseCancelEditBox}>Cancel</button>
            }
            <button>Submit</button>
        </div>
    </form>
    )
}
export default EditPostForm;