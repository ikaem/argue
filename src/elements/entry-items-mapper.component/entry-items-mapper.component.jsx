import React from "react";

import classes from "./entry-items-mapper.module.css";

import ReplyItem from "../../components/main.container/posts.container/posts-mapper.container/post-item.component/replies.container/replies-mapper.component/reply-item.component/reply-item.component";
import PostItem from "../../components/main.container/posts.container/posts-mapper.container/post-item.component/post-item.component";

const EntryItemsMapper = ({replies, setFetchRepliesTrigger, posts, setFetchPostsTrigger}) => {
    return (
    <ul className={classes.entryItemsMapper}>
        {replies? 
        (replies.map(reply => 
            <ReplyItem
                key={reply.id}
                reply={reply}
                setFetchRepliesTrigger={setFetchRepliesTrigger}/>
        )):
        (posts.map(post => 
            <PostItem 
                key={post.id} 
                post={post}
                setFetchPostsTrigger={setFetchPostsTrigger}/>
        ))}
    </ul>
    )
}

export default EntryItemsMapper;