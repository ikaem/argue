import React, { useContext } from "react";

import { UserContext } from "../../contexts/UserContext";
import classes from "./replies.module.css";

import NewReply from "./new-reply.container/new-reply.container";
import RepliesMapper from "./replies-mapper.component/replies-mapper.component";

const Replies = () => {
    const { user } = useContext(UserContext);
    return (
    <aside className={classes.replies}>
        <div className={classes.scrollingReplies}>
            {user.name && <NewReply/>}
            <RepliesMapper/>
        </div>
    </aside>
    )
}
export default Replies;