import React from "react";

import classes from "./reply-actual.module.css";

const ReplyActual = (props) => {
    return (
    <article className={classes.replyActual}>
        <img 
            className={classes.replyAuthorAvatar} 
            src="https://placeimg.com/69/69/people" 
            alt="reply author avatar"/>
        <div className={classes.replyContent}>
            <p className={classes.replyDates}>
                <span>User Replied on 22 Jan 2020</span>
                <span>| edited 23 Jan 2020</span>
            </p>
            <p className={classes.replyText}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente quibusdam autem in eligendi totam, vero asperiores nostrum officiis. Odio voluptates quod corporis ipsam ea unde iusto quae, tempore vero quibusdam.
            </p>
            
            <div className={classes.replyButtons}>
                <span>Delete Reply?</span>
                <button class="button">Yes</button>
                <button class="button">No</button>
                <button class="button">Delete</button>
                <button class="button">Reply</button>
            </div>
        </div>
    </article>
    )
}
export default ReplyActual;