import React, { useContext } from "react";

import classes from "./post-actual.module.css";
import { UserContext } from "../../../../../../contexts/UserContext";

const PostActual = ({ post, editUneditPost, openCloseReplies, openCloseDeleteBox, isDeleteBoxOpen, deletePost }) => {
    const { loggedUser } = useContext(UserContext);
    const { text, dateCreated, dateEdited, author } = post;

    return (
    <article className={classes.postActual}>
        <img 
            className={classes.postAuthorAvatar} 
            src="https://placeimg.com/69/69/people" 
            alt="post author avatar"/>
        <div className={classes.postContent}>
            <p className={classes.postAuthorDates}>
                <span>{author}</span>
                <span> posted on {new Date(dateCreated).toDateString().slice(4)}</span>
                {dateEdited && <span> | edited {new Date(dateEdited).toDateString().slice(4)}</span>}
            </p>
            <p className={classes.postText}>{text}</p>
            
            {isDeleteBoxOpen && 
                <div className={classes.postDeleteConfirm}>
                    <span>Delete Post and All Replies?</span>
                    <button onClick={deletePost}>Yes</button>
                    <button onClick={openCloseDeleteBox}>No</button>
                </div>
            }

            <div className={classes.postActions}>
                {/* author and loggeduser.name will need to be replaced with ids eventually */}
                {!isDeleteBoxOpen && loggedUser.name === author &&
                    <button onClick={openCloseDeleteBox}>Delete</button>
                }
                {loggedUser.name === author && <button onClick={editUneditPost}>Edit</button>}
                <button onClick={openCloseReplies}>3 Replies</button>
                {loggedUser.name === author && <button onClick={openCloseReplies}>Reply</button>}
            </div>
        </div>
    </article>
    )
}
export default PostActual;