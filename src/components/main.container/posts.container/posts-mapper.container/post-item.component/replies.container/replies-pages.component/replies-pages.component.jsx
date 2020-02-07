import React from "react";

import classes from "./replies-pages.module.css";

const RepliesPages = (props) => {
    return (
    <ul className={classes.repliesPages}>
        <li>Page</li>
        <li><i class="fa fa-angle-left"></i></li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li><i class="fa fa-angle-right"></i></li>
    </ul>
    )
}

export default RepliesPages;