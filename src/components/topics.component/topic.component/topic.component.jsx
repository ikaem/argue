import React from "react";

import classes from "./topic.module.css";

const Topic = ({topic}) => {
    return (
    <li className={classes.topic}>
        <span>{`${topic}`}</span>
    </li>
    )
}
export default Topic;