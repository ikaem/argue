import React, { useState, useEffect } from "react";

import classes from "./posts.module.css";
import notify from "../../../utils/notify";

import PostsMapper from "./posts-mapper.container/posts-mapper.container";
import PostsPages from "./posts-pages.component/posts-pages.component";

const Posts = ({fetchPostsTrigger, setFetchPostsTrigger}) => {

    const [posts, setPosts] = useState([]);
    const [pagesNumber, setPagesNumber] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postsResponse = await fetch(`http://localhost:4000/posts/${currentPage}`);
                const parsedPostsResponse = await postsResponse.json();
                if(parsedPostsResponse.message !== "posts successfully retrieved") throw new Error(parsedPostsResponse.message);
                setPosts(parsedPostsResponse.data.sortedPosts);
                setPagesNumber(parsedPostsResponse.data.pagesNumber);
            }
            catch (error) {
                console.log(error);
                notify(error.message, "error");
            }
        }
        fetchPosts();
    }, [setPosts, fetchPostsTrigger, currentPage]);

    return (
    <section className={classes.posts}>
        <PostsMapper
            posts={posts}
            setFetchPostsTrigger={setFetchPostsTrigger}
        />
        <PostsPages
            pagesArray={Array(pagesNumber).fill().map((v, i) => v = i + 1)}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
        />
    </section>
    )
}

export default Posts;