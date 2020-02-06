import React from "react";

import classes from "./new-reply-form.module.css";

const NewReplyForm = (props) => {
    return (
    <article className={classes.newReplyForm}>
    {/* maybe will need to be separate presentation component */}

        <form className={classes.newReplyFormContainer}>
            <label className={classes.newReplyInfo} htmlFor="newReplyInput">
                Reply to   
                <span> Post Author </span>
            </label>
            <textarea
                className={classes.newReplyInput}
                name="newReplyInput"
                id="newReplyInput"
            />
            <div className={classes.replyFormButtons}>
                <p 
                    className={classes.replyCancel} 
                    >Cancel
                </p>
                <button 
                    className={classes.replySubmit}    
                    type="submit">Send Reply
                </button>
            </div>
        </form>

    </article>
    )
}
export default NewReplyForm;