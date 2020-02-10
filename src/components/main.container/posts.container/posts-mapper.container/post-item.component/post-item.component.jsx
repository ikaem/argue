import React, { useState } from "react";

import classes from "./post-item.module.css";
import notify from "../../../../../utils/notify";

import PostActual from "./post-actual.component/post-actual.component";
import EditPost from "./edit-post.container/edit-post.container";
import Replies from "./replies.container/replies.container";

const PostItem = ({post, setFetchPostsTrigger}) => {
    const { id } = post;
    const [isPostForEdit, setIsPostForEdit] = useState(false);
    const [isRepliesOpen, setIsRepliesOpen] = useState(false);
    const [isDeleteBoxOpen, setIsDeleteBoxOpen] = useState(false);

    const openCloseReplies = () => {
        setIsRepliesOpen(prevIsRepliesOpen => !prevIsRepliesOpen);
    }
    const editUneditPost = () => {
        setIsPostForEdit(prevIsPostForEdit => !prevIsPostForEdit);
    }
    const openCloseDeleteBox = () => {
        setIsDeleteBoxOpen(prevIsDeleteBoxOpen => !prevIsDeleteBoxOpen);
    }

    const deletePost = async () => {
        try {
            const deleteResponse = await fetch(`http://localhost:4000/deletepost/${id}`, {
                method: "delete",
                headers: {
                    "Content-Type": "application/json",
                    // authorization: `Bearer ${user.accessToken}`,
                },
            });
            const parsedDeleteResponse = await deleteResponse.json();
            if(parsedDeleteResponse.message !== "post deleted successfully") throw new Error(parsedDeleteResponse.message);
            setFetchPostsTrigger(prevTrigger => prevTrigger + 1);
            notify(parsedDeleteResponse.message, "success");
        }
        catch (error) {
            console.log(error);
            notify(error.message, "error");
        }
    }

    return (
    <li className={classes.postItem}>
        {isPostForEdit? 
            <EditPost 
                post={post}
                editUneditPost={editUneditPost}
                setFetchPostsTrigger={setFetchPostsTrigger}
            />: 
            <PostActual 
                post={post}
                editUneditPost={editUneditPost}
                openCloseReplies={openCloseReplies}
                openCloseDeleteBox={openCloseDeleteBox}
                isDeleteBoxOpen={isDeleteBoxOpen}
                deletePost={deletePost}
            />
        }
        {isRepliesOpen && 
            <Replies postId={post.id}/>
        }
    </li>
    )
}
export default PostItem;