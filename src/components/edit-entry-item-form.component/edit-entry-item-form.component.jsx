import React from "react";

import classes from "./edit-entry-item-form.module.css";

const EditEntryItemForm = ({ textForUpdate, isCancelEditBoxOpen, openCloseCancelEditBox, editUneditEntryItem, handleChange, handleSubmit }) => {
    
    return (
    <form 
        className={classes.editEntryItemForm}
        onSubmit={handleSubmit}>
        <label htmlFor="editEntryItemInput">Edit Karlo's post??? WORK OUT WHETHER POST OR REPLY from 20-02-2020</label>
        <textarea                     
            required
            className={classes.editEntryItemInput}
            name="editEntryItemInput" 
            id="editEntryItemInput" 
            cols="30" rows="10"
            value={textForUpdate} 
            onChange={handleChange}
            />
        <div className={classes.editEntryItemButtons}>
            {isCancelEditBoxOpen && <>
                <p>Cancel Editing The Post? or REPLY?</p>
                <button
                    type="button"
                    onClick={editUneditEntryItem}>Yes</button>
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
export default EditEntryItemForm;