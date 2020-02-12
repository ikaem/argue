import React from "react";

import classes from "./entry-items-mapper.module.css";

import ReplyItem from "../../containers/reply-item.container/reply-item.container";
import PostItem from "../../containers/post-item.container/post-item.container";

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