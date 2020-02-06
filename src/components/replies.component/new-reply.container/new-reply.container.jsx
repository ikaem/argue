import React from "react";

import classes from "./new-reply.module.css";
import NewReplyForm from "./new-reply-form.component/new-reply-form.component";

const NewReply = (props) => {
    return (
    <section className={classes.newReply}>
        <NewReplyForm/>
    </section>
    )
}
export default NewReply;