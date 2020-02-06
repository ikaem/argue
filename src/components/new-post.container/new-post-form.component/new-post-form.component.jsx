import React from "react";

import classes from "./new-post-form.module.css";

const NewPostForm = ({newPost, setNewPost, onChangeHandle, onSubmitHandle}) => {
    return (
    <article className={classes.newPostFormComponent}>
        <form className={classes.newPostForm} onSubmit={onSubmitHandle}>
            <label className={classes.newPostLabel} htmlFor="newPost">What's on your mind?</label>
            <textarea
                className={classes.newPostInput}
                required
                name="newPost"
                id="newPost"
                value={newPost}
                onChange={onChangeHandle}
            />
            <div className={classes.newFormButtons}>
                <p 
                    className={classes.newPostCancel}
                    onClick={() => setNewPost("")}
                    >Cancel</p>
                <button className={classes.newPostSubmit} type="submit">Post</button>
            </div>
        </form>
    </article>
    )
}
export default NewPostForm;