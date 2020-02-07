import React from "react";

import classes from "./post-item.module.css";

import PostActual from "./post-actual.component/post-actual.component";
import EditPost from "./edit-post.container/edit-post.container";
import Replies from "./replies.container/replies.container";

const PostItem = (props) => {
    return (
    <li className={classes.postItem}>
        <PostActual/>
        <EditPost/>
        <Replies/>
    </li>
    )
}
export default PostItem;