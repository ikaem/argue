import React from "react";

import classes from "./posts-pages.module.css";

const PostsPages = ({pagesArray, currentPage, setCurrentPage}) => {
    return (
    <ul className={classes.postsPages}>
        <p>Page</p>
        {currentPage > 1 && <li onClick={() => setCurrentPage(currPage => currPage - 1)}><i className="fa fa-angle-left"></i></li>}
        {pagesArray.map(page => 
                <li 
                    key={page} 
                    onClick={() => setCurrentPage(page)}
                    className={currentPage === page? classes.activePage: null}
                    >{page}
                </li>
            )}
        {currentPage < pagesArray.length && <li onClick={() => setCurrentPage(currPage => currPage + 1)}><i className="fa fa-angle-right"></i></li>}
    </ul>
    )
}

export default PostsPages;