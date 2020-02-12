import React, { useState } from "react";

import notify from "../../utils/notify";

import EditEntryItemForm from "../../components/edit-entry-item-form.component/edit-entry-item-form.component";

const EditPost = ({post, editUneditPost, setFetchPostsTrigger}) => {
    const { id, text } = post;
    const [textForUpdate, setTextForUpdate] = useState(text);
    const [isCancelEditBoxOpen, setIsCancelEditBoxOpen] = useState(false);

    const openCloseCancelEditBox = () => {
        setIsCancelEditBoxOpen(isItOpen => !isItOpen);
    }

    const handleChange = (e) => {
        setTextForUpdate(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // const updateResponse = await fetch(`http://localhost:4000/editpost/${id}`,{
            const updateResponse = await fetch(`https://secure-brook-13170.herokuapp.com/editpost/${id}`,{
                method: "put",
                headers: {
                    "Content-Type": "application/json",
                    // authorization: `Bearer ${user.accessToken}`,
                },
                body: JSON.stringify({textForUpdate})
            });
            const parsedUpdateResponse = await updateResponse.json();
            if(parsedUpdateResponse.message !== "post updated successfully") throw new Error(parsedUpdateResponse.message);
            setFetchPostsTrigger(prevTrigger => prevTrigger + 1);
            editUneditPost();
            notify(parsedUpdateResponse.message, "success");

        }
        catch (error) {
            console.log(error);
            notify(error.message, "error");
        }
    }
    return (
    <>
        <EditEntryItemForm
            textForUpdate={textForUpdate}
            isCancelEditBoxOpen={isCancelEditBoxOpen}
            openCloseCancelEditBox={openCloseCancelEditBox}
            editUneditEntryItem={editUneditPost}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
    </>
    )
}

export default EditPost;