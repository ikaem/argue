import React from "react";

import classes from "./new-post-form.module.css";

const NewPostForm = ({ newPost, isCancelPostBoxOpen, openCloseCancelPostBox, cancelPost, handleChange, handleSubmit }) => {
    return (
    <form 
        className={classes.newPostForm}
        onSubmit={handleSubmit}>
        <label 
            className={classes.newPostLabel}
            htmlFor="newPostInput">What's on your mind?
        </label>
        <textarea 
            required
            className={classes.newPostInput}
            name="newPostInput" 
            id="newPostInput" 
            cols="30" rows="10"
            value={newPost}
            onChange={handleChange}
            />
        <div className={classes.newPostButtons}>
            {isCancelPostBoxOpen && <>
                <p>Cancel Post?</p>
                <button 
                    type="button"
                    onClick={cancelPost}>Yes</button>
                <button
                    type="button"
                    className={classes.pushMarginRightButton}
                    onClick={openCloseCancelPostBox}>No</button>
            </>}
            {!isCancelPostBoxOpen &&
                <button
                    type="button"
                    onClick={openCloseCancelPostBox}>Cancel</button>
            }
            <button>Post</button>
        </div>
    </form>
    )
}

export default NewPostForm;