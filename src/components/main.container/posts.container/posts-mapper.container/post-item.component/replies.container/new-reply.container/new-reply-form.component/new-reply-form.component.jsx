import React from "react";

import classes from "./new-reply-form.module.css";

const NewReplyForm = (props) => {
    return (
    <form className={classes.newReplyForm}>
        <label 
            className={classes.newReplyLabel}
            htmlFor="newReplyInput"
            >Reply to Post Author
        </label>
        <textarea 
            required
            className={classes.newReplyInput}
            name="newReplyInput" 
            id="newReplyInput" 
            cols="30" rows="10"/>
        <div clasName={classes.newReplyButtons}>
            <p>Cancel Reply?</p>
            <button>Yes</button>
            <button>No</button>
            <button>Cancel</button>
            <button>Reply</button>
        </div>
    </form>
    )
}

export default NewReplyForm;