import React from "react";

import classes from "./new-entry-item-form.module.css";

const NewEntryItemForm = ({ newEntryItem, isCancelBoxOpen, openCloseCancelBox, cancelNewEntryItem, handleChange, handleSubmit }) => {
    return (
    <form 
        className={classes.newEntryItemForm}
        onSubmit={handleSubmit}>
        <label 
            className={classes.newEntryItemLabel}
            htmlFor="newEntryItemInput">What's on your mind?
        </label>
        <textarea 
            required
            className={classes.newEntryItemInput}
            name="newEntryItemInput" 
            id="newEntryItemInput" 
            cols="30" rows="5"
            value={newEntryItem}
            onChange={handleChange}
            />
        <div className={classes.newEntryItemButtons}>
            {isCancelBoxOpen && <>
                <p>Cancel Entry? OR POST OR SOMETHING?</p>
                <button 
                    type="button"
                    onClick={cancelNewEntryItem}>Yes</button>
                <button
                    type="button"
                    className={classes.pushMarginRightButton}
                    onClick={openCloseCancelBox}>No</button>
            </>}
            {!isCancelBoxOpen &&
                <button
                    type="button"
                    onClick={openCloseCancelBox}>Cancel</button>
            }
            <button>Publish</button>
        </div>
    </form>
    )
}

export default NewEntryItemForm;