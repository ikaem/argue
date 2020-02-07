import React from "react";

import classes from "./replies.module.css";

import NewReply from "./new-reply.container/new-reply.container";
import RepliesMapper from "./replies-mapper.component/replies-mapper.component";
import RepliesPages from "./replies-pages.component/replies-pages.component";

const Replies = (props) => {
    return (
    <div>
        <NewReply/>
        <RepliesMapper/>
        <RepliesPages/>
    </div>
    )
}
export default Replies;