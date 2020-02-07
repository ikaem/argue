import React from "react";

import classes from "./new-post.module.css";

import NewPostForm from "./new-post-form.component/new-post-form.component";

const NewPost = (props) => {
    return (
    <section className={classes.newPost}>
        <h1>Welcome User</h1>
        <NewPostForm/>
    </section>
    )
}

export default NewPost;