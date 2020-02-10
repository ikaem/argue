import React from "react";

import classes from "./posts-mapper.module.css";

import PostItem from "./post-item.component/post-item.component";

const PostsMapper = ({posts, setFetchPostsTrigger}) => {
    return (
    <ul className={classes.postsMapper}>
        {posts.map(post => 
            <PostItem 
                key={post.id} 
                post={post}
                setFetchPostsTrigger={setFetchPostsTrigger}/>
        )}
    </ul>
    )
}

export default PostsMapper;