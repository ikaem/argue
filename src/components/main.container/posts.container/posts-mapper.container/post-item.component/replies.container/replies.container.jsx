import React, { useState, useEffect, useContext } from "react";

import classes from "./replies.module.css";
import notify from "../../../../../../utils/notify";
import { UserContext } from "../../../../../../contexts/UserContext";

import NewReply from "./new-reply.container/new-reply.container";
import RepliesMapper from "./replies-mapper.component/replies-mapper.component";
import RepliesPages from "./replies-pages.component/replies-pages.component";

const Replies = ({postId}) => {
    const { loggedUser } = useContext(UserContext);
    const [replies, setReplies] = useState([]);
    const [repliesPagesNumber, setRepliesPagesNumber] = useState(1);
    const [currentRepliesPage, setCurrentRepliesPage] = useState(1);
    const [fetchRepliesTrigger, setFetchRepliesTrigger] = useState(0);

    useEffect(() => {
        const fetchReplies = async () => {
            try {
                const repliesResponse = await fetch(`http://localhost:4000/replies/${postId}/${currentRepliesPage}`);
                const parsedRepliesResponse = await repliesResponse.json();
                if(parsedRepliesResponse.message !== "replies successfully retrieved") throw new Error(parsedRepliesResponse.message);
                setReplies(parsedRepliesResponse.data.sortedReplies);
                setRepliesPagesNumber(parsedRepliesResponse.data.pagesNumber);
            }
            catch (error) {
                console.log(error);
                notify(error.message, "error");
            }
        }
        fetchReplies();
    }, [setReplies, fetchRepliesTrigger, currentRepliesPage]);

    return (
    <div className={classes.replies}>
        {loggedUser.id && <NewReply
            postid={postId}
            setFetchRepliesTrigger={setFetchRepliesTrigger}
        />}
        <RepliesMapper
            replies={replies}
            setFetchRepliesTrigger={setFetchRepliesTrigger}
        />
        <RepliesPages
            repliesPagesArray={Array(repliesPagesNumber).fill().map((v, i) => v = i + 1)}
            currentRepliesPage={currentRepliesPage}
            setCurrentRepliesPage={setCurrentRepliesPage}
        />
    </div>
    )
}
export default Replies;