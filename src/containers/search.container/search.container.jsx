import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import classes from "./search.module.css";

const Search = (props) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [searchRedirect, setSearchRedirect] = useState("");

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchRedirect(`/search?searchterm=${searchTerm}`);
        setSearchTerm("");

    }

    return (
    <section className={classes.search}>
        <form 
            className={classes.searchForm}
            onSubmit={handleSubmit}>
            <label 
                className={classes.searchLabelButton}
                htmlFor="searchInput" 
                type="submit"
                style={{display: "none"}}>Search</label>
            <input 
                className={classes.searchInput}
                type="search"
                name="searchInput"
                id="searchInput"
                value={searchTerm}
                onChange={handleChange}
                />
            <button><i className="fa fa-search"></i></button>
        </form>
        {searchRedirect && <Redirect to={searchRedirect}/>}
    </section>
    )
}
export default Search;