import React, { useState, useEffect, useContext } from "react";

import classes from "./replies.module.css";
import notify from "../../utils/notify";
import { UserContext } from "../../contexts/UserContext";

import NewReply from "../new-reply.container/new-reply.container";
import EntryItemsMapper from "../../components/entry-items-mapper.component/entry-items-mapper.component";
import EntryItemsPages from "../../components/entry-items-pages.component/entry-items-pages.component";

const Replies = ({postId}) => {
    const { loggedUser } = useContext(UserContext);
    const [replies, setReplies] = useState([]);
    const [repliesPagesNumber, setRepliesPagesNumber] = useState(1);
    const [currentRepliesPage, setCurrentRepliesPage] = useState(1);
    const [fetchRepliesTrigger, setFetchRepliesTrigger] = useState(0);

    useEffect(() => {
        const fetchReplies = async () => {
            try {
                // const repliesResponse = await fetch(`http://localhost:4000/replies/${postId}/${currentRepliesPage}`);
                const repliesResponse = await fetch(`https://secure-brook-13170.herokuapp.com/replies/${postId}/${currentRepliesPage}`);
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
    }, [fetchRepliesTrigger, currentRepliesPage, postId]);

    return (
    <div className={classes.replies}>
        {loggedUser.id && <NewReply
            postId={postId}
            setFetchRepliesTrigger={setFetchRepliesTrigger}
        />}
        <EntryItemsMapper
            replies={replies}
            setFetchRepliesTrigger={setFetchRepliesTrigger}
        />
        <EntryItemsPages
            pagesArray={Array(repliesPagesNumber).fill().map((v, i) => v = i + 1)}
            currentPage={currentRepliesPage}
            setCurrentPage={setCurrentRepliesPage}
        />
    </div>
    )
}

export default Replies;