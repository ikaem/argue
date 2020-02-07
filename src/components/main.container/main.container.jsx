import React from "react";

import classes from "./main.module.css";

import NewPost from "./new-post.container/new-post.container";
import Posts from "./posts.container/posts.container";

const Main = (props) => {
    return (
    <main className={`grid ${classes.main}`}>
        <NewPost/>
        <Posts/>
        {/* <Topics/> */}
    </main>
    )
}

export default Main;