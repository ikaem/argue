import React from "react";

import classes from "./replies-pages.module.css";

const RepliesPages = ({repliesPagesArray, currentRepliesPage, setCurrentRepliesPage}) => {
    return (
    <ul className={classes.repliesPages}>
        <p>Page</p>
        {currentRepliesPage > 1 && <li onClick={() => setCurrentRepliesPage(currPage => currPage - 1)}><i className="fa fa-angle-left"></i></li>}
        {repliesPagesArray.map(page => 
            <li 
                key={page} 
                onClick={() => setCurrentRepliesPage(page)}
                className={currentRepliesPage === page? classes.activeRepliesPage: null}
                >{page}
            </li>
        )}
        {currentRepliesPage < repliesPagesArray.length && <li onClick={() => setCurrentRepliesPage(currPage => currPage + 1)}><i className="fa fa-angle-right"></i></li>}
    </ul>
    )
}

export default RepliesPages;