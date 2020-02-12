import React, { useState } from "react";
import { Route, Switch, useLocation as location } from "react-router-dom";

import classes from "./main.module.css";

import NewPost from "../new-post.container/new-post.container";
import Topics from "../topics.component/topics.component";
import PostsSearch from "../posts-search.container/posts-search.container";

const Main = () => {
    const { search } = location();
    const [fetchPostsTrigger, setFetchPostsTrigger] = useState(0);
    

    return (
    <main className={`grid ${classes.main}`}>
        {!search && <NewPost
            setFetchPostsTrigger={setFetchPostsTrigger}
        />}
        <Switch>
            <Route path="/search">
                <PostsSearch
                    fetchPostsTrigger={fetchPostsTrigger}
                    setFetchPostsTrigger={setFetchPostsTrigger}
                    searching={[...new URLSearchParams(search).values()][0]}
                    url="searchposts"
                />
            </Route>
            <Route exact path="/">
                <PostsSearch
                    fetchPostsTrigger={fetchPostsTrigger}
                    setFetchPostsTrigger={setFetchPostsTrigger}
                    url="posts"
                />
            </Route>
        </Switch>
        <Topics/>
    </main>
    )
}

export default Main;