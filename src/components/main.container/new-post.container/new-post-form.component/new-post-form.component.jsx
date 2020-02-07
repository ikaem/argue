import React from "react";

import classes from "./new-post-form.module.css";

const NewPostForm = (props) => {
    return (
    <form className={classes.newPostForm}>
        <label 
            className={classes.newPostLabel}
            htmlFor="newPostInput"
            >What's on your mind?
        </label>
        <textarea 
            required
            className={classes.newPostInput}
            name="newPostInput" 
            id="newPostInput" 
            cols="30" rows="10"/>
        <div clasName={classes.newPostButtons}>
            <p>Cancel Post?</p>
            <button>Yes</button>
            <button>No</button>
            <button>Cancel</button>
            <button>Post</button>
        </div>
    </form>
    )
}

export default NewPostForm;