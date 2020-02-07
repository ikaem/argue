import React from "react";

import classes from "./post-actual.module.css";

const PostActual = (props) => {
    return (
    <article className={classes.postActual}>
        <img 
            className={classes.postAuthorAvatar} 
            src="https://placeimg.com/69/69/people" 
            alt="psot author avatar"/>
        <div className={classes.postContent}>
            <p className={classes.postDates}>
                <span>User Posted on 22 Jan 2020</span>
                <span>| edited 23 Jan 2020</span>
            </p>
            <p className={classes.postText}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente quibusdam autem in eligendi totam, vero asperiores nostrum officiis. Odio voluptates quod corporis ipsam ea unde iusto quae, tempore vero quibusdam.
            </p>
            
            <div className={classes.postDeleteConfirm}>
                <span>Delete Post and All Replies?</span>
                <button>Yes</button>
                <button>No</button>
            </div>

            <div className={classes.postActions}>
                <button>3 Replies</button>
                <button>Edit</button>
                <button>Delete</button>
                <button>Reply</button>
            </div>
        </div>
    </article>
    )
}
export default PostActual;