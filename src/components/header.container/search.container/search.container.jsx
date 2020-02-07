import React from "react";

import classes from "./search.module.css";

const Search = (props) => {
    return (
    <section className={classes.search}>
        <form className={classes.searchForm}>
            <label 
                className={classes.searchLabelButton}
                htmlFor="searchInput" 
                type="submit"
                style={{display: "none"}}>Search</label>
            <input 
                className={classes.searchInput}
                type="search"
                name="searchInput"
                id="searchInput"/>
            <i className="fa fa-search"></i>
        </form>
    </section>
    )
}
export default Search;