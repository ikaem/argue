import React, { useState, useContext } from "react";

import { toast } from "react-toastify";
import classes from "./edit-post.module.css";

import { UserContext } from "../../../contexts/UserContext";
toast.configure({
    position:"top-center",
    autoClose: 3000,
    hideProgressBar: false,
    newestOnTop: true,
    closeOnClick: true,
    rtl: false,
    pauseOnVisibilityChange: true,
    draggable: true,
    pauseOnHover: true,
  });

const EditPost = ({post, setPostForEdit, setFetchPostsTrigger}) => {
    const { user } = useContext(UserContext);
    const {id, text, dateCreated, author} = post;
    const [textForEdit, setTextForEdit] = useState(text);
    const [renderCancelQuestion, setRenderCancelQuestion] = useState(false);
    const notify = (message) => {
        toast(message);
    }
    const onHandleChange = (event) => {
        setTextForEdit(event.target.value);
    }
    const onHandleSubmit = async (event) => {
        event.preventDefault();
        try {
            const editPostResponse = await fetch(`http://localhost:4000/editpost/${id}`, {
                method: "put",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${user.accessToken}`
                },
                body: JSON.stringify({postBody: textForEdit, dateEdited: new Date(Date.now())}),
            })
            const parsedEditPostResponse = await editPostResponse.json();
            if(parsedEditPostResponse.message !== "post updated successfully") throw new Error(parsedEditPostResponse.message);
            setFetchPostsTrigger(prevTrigger => prevTrigger + 1);
            setPostForEdit(null);
            notify(parsedEditPostResponse.message);
        }
        catch (error) {
            console.log(error);
            notify(error.message);
        }
    }
    

    return (
    <li className={classes.editPostListItem}>

        <form 
            className={classes.editPostFormContainer}
            onSubmit={onHandleSubmit}>
            <label className={classes.editPostInfo} htmlFor="editPostInput">
                Edit  
                <span> {author}</span>
                's post from 
                <span> {new Date(dateCreated).toDateString().slice(4)}</span>
            </label>
            <textarea
                className={classes.editPostInput}
                name="text"
                id="editPostInput"
                value={textForEdit}
                onChange={onHandleChange}
            />
            <div className={classes.editPostButtons}>
                {renderCancelQuestion && (
                    <div className={classes.editCancelButtons}>
                        <p>Cancel Edit?</p>
                        <p onClick={() => setRenderCancelQuestion(false)}>No</p>
                        <p onClick={() => setPostForEdit(null)}>Yes</p>

                    </div>)}
                <p 
                    className={classes.editPostCancel} 
                    onClick={text === textForEdit? () => setPostForEdit(null): () => setRenderCancelQuestion(true)}
                    >Cancel
                </p>
                <button 
                    className={classes.editPostSubmit}    
                    type="submit">Submit
                </button>
            </div>
        </form>
    </li>
    )
}
export default EditPost;