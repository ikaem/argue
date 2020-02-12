import React, { useState, useEffect } from "react";

import classes from "./posts-search.module.css";
import notify from "../../utils/notify";

import EntryItemsMapper from "../../components/entry-items-mapper.component/entry-items-mapper.component";
import EntryItemsPages from "../../components/entry-items-pages.component/entry-items-pages.component";

const PostsSearch = ({fetchPostsTrigger, setFetchPostsTrigger, searching, url}) => {

    const [posts, setPosts] = useState([]);
    const [pagesNumber, setPagesNumber] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    

    const string = "Lorem ipsum, #dolor sit amet #consectetur adipisicing #elit. Sapiente quibusdam autem in #eligendi totam, #vero asperiores nostrum #officiis . Odio voluptates quod corporis #ipsam ea unde iusto #quae, tempore #vero #quibusdam.";

    // const hashes = string.split(" ")

    const newString = string.replace(/\.|,/g, "");
    console.log(newString);

    const hashesArray = newString.split(" ").filter(hash => hash.charAt(0) === "#");
    console.log(hashesArray);
    const noDoubles = hashesArray.filter((single, index) => hashesArray.indexOf(single) === index);
    console.log(noDoubles);

    const noDoubles2 = [...new Set(hashesArray)];
    console.log(noDoubles2);


    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // const postsResponse = await fetch(`http://localhost:4000/${url}/${currentPage}?searching=${searching}`);

                const postsResponse = await fetch(`https://secure-brook-13170.herokuapp.com/${url}/${currentPage}?searching=${searching}`);

                const parsedPostsResponse = await postsResponse.json();
                if(parsedPostsResponse.message !== "posts successfully retrieved") throw new Error(parsedPostsResponse.message);
                setPosts(parsedPostsResponse.data.sortedPosts);
                setPagesNumber(parsedPostsResponse.data.pagesNumber);
            }
            catch (error) {
                console.log(error);
                notify(error.message, "error");
            }
        }
        fetchPosts();
    }, [setPosts, fetchPostsTrigger, currentPage, searching, url]);

    return (
    <section className={classes.posts}>
        <EntryItemsMapper
            posts={posts}
            setFetchPostsTrigger={setFetchPostsTrigger}
        />
        <EntryItemsPages
            pagesArray={Array(pagesNumber).fill().map((v, i) => v = i + 1)}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
        />
    </section>
    )
}

export default PostsSearch;