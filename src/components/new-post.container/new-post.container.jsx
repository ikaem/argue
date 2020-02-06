import React, { useState, useContext } from "react";

import { UserContext } from "../../contexts/UserContext";
import { toast } from "react-toastify";
import classes from "./new-post.module.css";

import NewPostForm from "./new-post-form.component/new-post-form.component";
import { fetchEndpoint } from "../../helpers/functions";
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

const NewPost = ({ fetchPostsTrigger, setFetchPostsTrigger }) => {
    const { user } = useContext(UserContext);
    const [newPost, setNewPost] = useState("");
    const notify = (message) => {
      toast(message);
    }

    const onChangeHandle = (event) => {
      setNewPost(event.target.value);
      console.log(newPost);
    }
    const onSubmitHandle = async (event) => {
      event.preventDefault();
      try {
        const newPostResponse = await fetchEndpoint("post", "/newpost", "same-origin", user.accessToken, {postBody: newPost});
        if(newPostResponse.message !== "new post successfully created") throw new Error(newPostResponse.message);
        setFetchPostsTrigger(prevTrigger => prevTrigger + 1);
        setNewPost("");
        notify(newPostResponse.message);
      }
      catch (error) {
        console.log(error);
        notify(error.message);
      }
    }

    return (
    <section className={classes.newPost}>
      {user.name? 
        <NewPostForm
          newPost={newPost}
          setNewPost={setNewPost}
          onChangeHandle={onChangeHandle}
          onSubmitHandle={onSubmitHandle}
        />: 
        <h1 className={classes.pleaseLoginToPost}>Please login to post</h1>}
    </section>
    )
}
export default NewPost;