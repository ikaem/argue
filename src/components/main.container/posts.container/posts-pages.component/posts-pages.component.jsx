import React from "react";

import classes from "./posts-pages.module.css";

const PostsPages = (props) => {
    return (
    <ul className={classes.postsPages}>
        <li>Page</li>
        <li><i class="fa fa-angle-left"></i></li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li><i class="fa fa-angle-right"></i></li>
    </ul>
    )
}

export default PostsPages;