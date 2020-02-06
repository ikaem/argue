import React from "react";

import classes from "./pages.module.css";

const Pages = ({pages, currentPage, setCurrentPage}) => {

    return (
    <div className={classes.pages}>
        <ul className={classes.pagesList}>
            <span>Page </span>
           {currentPage > 1 && <i 
                onClick={() => setCurrentPage(prevCurrent => prevCurrent - 1)}
                class="fa fa-angle-left"/>}
            {pages.map(page => 
            <li 
                key={page}
                className={`${page === currentPage && classes.activePage} ${classes.pageNumber}`}
                onClick={() => setCurrentPage(page)}>
                {page}</li>)
            }
            {currentPage < pages.length && <i 
                onClick={() => setCurrentPage(prevCurrent => prevCurrent + 1)}
                class="fa fa-angle-right"/>}

        </ul>
    </div>
    )
}

export default Pages;