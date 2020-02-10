import React, { useState, useContext } from "react";

import classes from "./new-post.module.css";
import notify from "../../../utils/notify";
import { UserContext } from "../../../contexts/UserContext";

import NewPostForm from "./new-post-form.component/new-post-form.component";
import NewEntryItemForm from "../../../elements/new-entry-item-form.component/new-entry-item-form.component";

const NewPost = ({setFetchPostsTrigger}) => {
    const { loggedUser } = useContext(UserContext);
    const [newPost, setNewPost] = useState("");
    const [isCancelPostBoxOpen, setIsCancelPostBoxOpen] = useState(false);

    const openCloseCancelPostBox = () => {
        setIsCancelPostBoxOpen(isItOpen => !isItOpen);
    }

    const cancelPost = () => {
        setNewPost("");
        openCloseCancelPostBox();
    }
    
    const handleChange = (e) => {
        setNewPost(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newPostResponse = await fetch(`http://localhost:4000/newpost`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    // authorization: `Bearer ${user.accessToken}`,
                },
                // wont need logged user name once authenticaiton works
                body: JSON.stringify({postBody: newPost, loggedUserName: "karlo"})
            });
            const parsedNewPostResponse = await newPostResponse.json();
            if(parsedNewPostResponse.message !== "new post successfully created") throw new Error(parsedNewPostResponse.message);
            setFetchPostsTrigger(prevTrigger => prevTrigger + 1);
            setNewPost("");
            notify(parsedNewPostResponse.message, "success");
        }
        catch (error) {
            console.log(error);
            notify(error.message, "error");
        }
    }
    
    return (
    <section className={classes.newPost}>
        <h1>Welcome <span className={classes.userName}>{loggedUser.name || "Guest"}!</span></h1>
        {loggedUser.id? 
        (<NewEntryItemForm
            newEntryItem={newPost}
            isCancelBoxOpen={isCancelPostBoxOpen}
            openCloseCancelBox={openCloseCancelPostBox}
            cancelNewEntryItem={cancelPost}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />): 
        <p>Please login to post and reply</p>}
    </section>
    )
}

export default NewPost;

/* 
<NewPostForm
    newPost={newPost}
    isCancelPostBoxOpen={isCancelPostBoxOpen}
    openCloseCancelPostBox={openCloseCancelPostBox}
    cancelPost={cancelPost}
    handleChange={handleChange}
    handleSubmit={handleSubmit}
/>
*/