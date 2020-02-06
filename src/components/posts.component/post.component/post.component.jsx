import React, { useState, useContext } from "react";

import { ReplyContext } from "../../../contexts/ReplyContext";
import { UserContext } from "../../../contexts/UserContext";
import classes from "./post.module.css";
import { toast } from "react-toastify";
import Replies from "../../replies.component/replies.component";

const Post = ({post, setPostForEdit, setFetchPostsTrigger}) => {
    const { user } = useContext(UserContext);
    const {id, text, dateCreated, dateEdited, author} = post;
    const [renderDeleteQuestion, setRenderDeleteQuestion] = useState(false);
    const [isReplies, setIsReplies] = useState(true);
    const { 
        postForReplies, 
        setPostForReplies, 
        isReplyMode, 
        setIsReplyMode } = useContext(ReplyContext);
    const notify = (message) => {
        toast(message);
    }

    const setEditPost = () => {
        setPostForEdit(id);
    }
    // could this be refactored to that switch object? is it needed at all?
    const openCloseReplies = () => {
        if(!postForReplies && !isReplyMode){
            setPostForReplies(id);
            return setIsReplyMode(true);
        }
        if(postForReplies !== id && isReplyMode){
            return setPostForReplies(id);
        }
        if(postForReplies === id && isReplyMode){
            setPostForReplies(null);
            return setIsReplyMode(false);
        }
    }
    const onDeletePost = async () => {
        try {
            const deletePostResponse = await fetch(`http://localhost:4000/deletepost/${id}`, {
                method: "delete",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": `Beared ${user.accessToken}`
                },
            });
            const parsedDeletePostResponse = await deletePostResponse.json();
            if(parsedDeletePostResponse.message !== "post deleted successfully") throw new Error(parsedDeletePostResponse.message);
            setFetchPostsTrigger(prevTrigger => prevTrigger + 1);
            setRenderDeleteQuestion(false);
            notify(parsedDeletePostResponse.message);
        }
        catch (error) {
            console.log(error);
            notify(error.message);

        }
    }

    return (
        <li className={classes.postListItem}>
            <article className={classes.postContainer}>
                    <img 
                        className={classes.profileImage}
                        src="https://placeimg.com/69/69/people"
                        alt="profile picture"/>
                    <div className={classes.notImage}>
                        <p className={classes.userAndDate}>
                            <span className={classes.userName}>{author} posted on </span>
                            <span className={classes.postDate}>{new Date(dateCreated).toDateString().slice(4)}</span>
                            {dateEdited && <span className={classes.editDate}> | edited on {new Date(dateEdited).toDateString().slice(4)}</span>}
                        </p>
                        <p className={classes.postText}>{text}</p>
                        <ul className={classes.postActions}>

                            {renderDeleteQuestion && (
                            <div className={classes.deleteButtons}>
                                <p>Delete Post and its Replies?</p>
                                <p onClick={() => setRenderDeleteQuestion(false)}>No</p>
                                <p onClick={onDeletePost}>Yes</p>

                            </div>)}

                            <li onClick={openCloseReplies} className={classes.edit}>3 Replies</li>
                            {user.name === author && <li 
                                className={classes.edit}
                                onClick={setEditPost}
                                >Edit
                            </li>}
                            {user.name === author && 
                            (<li
                                onClick={() => setRenderDeleteQuestion(true)} 
                                className={classes.edit}>Delete</li>)}
                            {user.name && <li onClick={openCloseReplies} className={classes.edit}>Reply</li>}
                        </ul>
                    </div>


                    <div class="replies">
                            <div class="new-reply">
                                <form>
                                    <label for="">Reply to Post Author</label>
                                    <textarea name="" id="" cols="30" rows="10"></textarea>
                                    <div>
                                        <div class="cancel-reply-confirm">
                                            <p>Cancel Reply?</p>
                                            <button>Yes</button>
                                            <button>No</button>
                                        </div>
                                        <button>Cancel</button>
                                        <button>Post</button>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <ul class="replies-list">
                                    <li>
                                        <article class="reply">
                                            <div class="actual-reply">
                                                <p>Karlo replied on 22 Jan 2020</p>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, tempora laudantium. Delectus, maxime? Distinctio corporis voluptate est magnam repudiandae asperiores. Dolorum quaerat deserunt a inventore debitis commodi non exercitationem! Aperiam!</p>
                                                <p>Edited 23 Jan 2020</p>
                                                <div class="reply-actions">
                                                    <div class="delete-confirm">
                                                        <p>Delete Reply</p>
                                                        <button>Yes</button>
                                                        <button>No</button>
                                                    </div>
                                                    <p>edit</p>
                                                    <p>delete</p>
                                                </div>
                                            </div>
                                            <div class="edit-reply">
                                                <form>
                                                    <label for="">Edit Karlo's reply from 20-02-2020</label>
                                                    <textarea name="" id="" cols="30" rows="10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente quibusdam autem in eligendi totam, vero asperiores nostrum officiis. Odio voluptates quod corporis ipsam ea unde iusto quae, tempore vero quibusdam.</textarea>
                                                    <div>
                                                        <div class="cancel-edit-reply-confirm">
                                                            <p>Cancel Edit Reply?</p>
                                                            <button>Yes</button>
                                                            <button>No</button>
                                                        </div>
                                                        <button>Cancel</button>
                                                        <button>Submit</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </article>
                                    </li>
                                </ul>
                            </div>
                        </div>



            </article>
        )}
        </li>
    )
}
export default Post;