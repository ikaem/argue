import React from "react";

import classes from "./edit-post-form.module.css";

const EditPostForm = (props) => {
    return (
    <form className={classes.editPostForm}>
        <label for="editPostInput">Edit Karlo's post from 20-02-2020</label>
        <textarea                     
            required
            className={classes.editPostInput}
            name="editPostInput" 
            id="editPostInput" 
            cols="30" rows="10"
            value={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente quibusdam autem in eligendi totam, vero asperiores nostrum officiis. Odio voluptates quod corporis ipsam ea unde iusto quae, tempore vero quibusdam"} />
        <div className={classes.editPostButtons}>
            <p>Cancel Edit Post?</p>
            <button className="button">Yes</button>
            <button className="button">No</button>
            <button className="button">Cancel</button>
            <button className="button">Submit</button>
        </div>
    </form>
    )
}
export default EditPostForm;