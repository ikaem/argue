import React from "react";

import classes from "./topics.module.css";

const Topics = (props) => {
    return (
    <section id="topics" className="topics">
        <h2>Popular Topics</h2>
        <ul className={classes.topicsList}>
            <li>#Topic</li>
            <li>#Topic</li>
            <li>#Topic</li>
            <li>#Topic</li>
        </ul>
    </section>
    )
}
export default Topics;