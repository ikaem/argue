import React from "react";

import classes from "./posts.module.css";

import PostsMapper from "./posts-mapper.container/posts-mapper.container";
import PostsPages from "./posts-pages.component/posts-pages.component";

const Posts = (props) => {
    return (
    <section className={classes.posts}>
        <PostsMapper/>
        <PostsPages/>
    </section>
    )
}

export default Posts;