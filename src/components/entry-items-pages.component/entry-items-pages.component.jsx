import React from "react";

import classes from "./entry-items-pages.module.css";

const EntryItemsPages = ({pagesArray, currentPage, setCurrentPage}) => {
    return (
    <ul className={classes.pages}>
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

export default EntryItemsPages;