import React, { useState } from "react";
import { Route } from "react-router-dom";

import classes from "./main.module.css";

import NewPost from "./new-post.container/new-post.container";
import Posts from "./posts.container/posts.container";
import Topics from "./topics.component/topics.component";

const Main = (props) => {
    const [fetchPostsTrigger, setFetchPostsTrigger] = useState(0);

    return (
    <main className={`grid ${classes.main}`}>
        <NewPost
            setFetchPostsTrigger={setFetchPostsTrigger}
        />
        <Route path="/search">
            <h1>Next</h1>
        </Route>
        <Route exact path="/">
            <Posts
                fetchPostsTrigger={fetchPostsTrigger}
                setFetchPostsTrigger={setFetchPostsTrigger}
            />
        </Route>
        <Topics/>
    </main>
    )
}

export default Main;