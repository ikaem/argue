import React from "react";

import classes from "./entry-item-actual.module.css";

const EntryItemActual = ({ entryItem, editUneditEntryItem, openCloseDeleteBox, isDeleteBoxOpen, deleteEntryItem, loggedUser, children }) => {
    const { text, dateCreated, dateEdited, author } = entryItem;
    console.log("reply text", text);
    const { name } = loggedUser;

    return (
    <article className={classes.entryItemActual}>
        <img 
            className={classes.entryItemAuthorAvatar} 
            src="https://placeimg.com/69/69/people" 
            alt="post author avatar"/>
        <div className={classes.entryItemContent}>
            <p className={classes.entryItemAuthorDates}>
                <span>{author}</span>
                <span> posted on {new Date(dateCreated).toDateString().slice(4)}</span>
                {dateEdited && <span> | edited {new Date(dateEdited).toDateString().slice(4)}</span>}
            </p>
            <p className={classes.entryItemText}>{text}</p>

            <div className={classes.entryItemButtons}>
                {isDeleteBoxOpen && <>
                    <p>Delete Post?</p>
                    <button onClick={deleteEntryItem}>Yes</button>
                    <button
                        className={classes.pushMarginRightButton}
                        onClick={openCloseDeleteBox}
                    >No</button>
                </>}
                {!isDeleteBoxOpen && name === author &&
                    <button
                        onClick={openCloseDeleteBox}
                        >Delete
                    </button>
                }
                {name === author && <button onClick={editUneditEntryItem}>Edit</button>}
                {children}
            </div>
            

        </div>
    </article>
    )
}
export default EntryItemActual;

/* 
<button onClick={openCloseReplies}>3 Replies</button>
{loggedUser.name === author && <button onClick={openCloseReplies}>Reply</button>}
*/