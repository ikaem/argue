import React, { useState, useEffect } from "react";

import classes from "./posts.module.css";

import Post from "./post.component/post.component";
import EditPost from "./edit-post.container/edit-post.container";
import Pages from "../../elements/pages.component/pages.component";

const Posts = ({posts, postPages, currentPostsPage, setCurrentPostsPage, setFetchPostsTrigger}) => {
    const [postForEdit, setPostForEdit] = useState(null)

    return (
    <section className={classes.posts}>
        <ul className={classes.postsMapper}>
            {posts.map((post) => post.id !== postForEdit? 
                <Post 
                    post={post} 
                    setPostForEdit={setPostForEdit}
                    setFetchPostsTrigger={setFetchPostsTrigger}
                    />: 
                <EditPost 
                    post={post} 
                    setPostForEdit={setPostForEdit}
                    setFetchPostsTrigger={setFetchPostsTrigger}/>)}
        </ul>
        <Pages
            pages={postPages}
            currentPage={currentPostsPage}
            setCurrentPage={setCurrentPostsPage}
        />
    </section>
    )
}
export default Posts;