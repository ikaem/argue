import React from "react";

import classes from "./posts-mapper.module.css";

import PostItem from "./post-item.component/post-item.component";

const PostsMapper = (props) => {
    return (
    <ul className={classes.postsMapper}>
    {/* mapping posts here  */}
    {/* i could probably conditionally render post, its edit, and then edit replies for each post */}
    {/* but that would look convulted with conditions and such */}
    {/* so doing it in the child */}
        <PostItem/>
    </ul>
    )
}

export default PostsMapper;