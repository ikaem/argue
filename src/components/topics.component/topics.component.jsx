import React from "react";

import classes from "./topics.module.css";
import { topics } from "../../assets/fakeDB";

import Topic from "./topic.component/topic.component";



const Topics = (props) => {

    return (
    <aside className={classes.topics}>
        <h1 className={classes.topicsTitle}>Popular Topics</h1>
        <ul className={classes.topicsMapper}>
            {topics.map(topic => (
                <Topic
                    topic={topic}/>
                ))}
        </ul>
    </aside>
    )
}











/// just testing hashes
const text = "Bacon ipsum dolor amet ham sausage beef doner chislic, #ham hock beef #ribs fatback landjaeger ribeye. #Beef bresaola chislic biltong turducken corned beef, pancetta #capicola andouille, doner #short ribs. Filet #mignon, meatloaf chuck pork chop venison turducken salami bresaola brisket #sirloin. #Bresaola, venison jowl #tongue #tongue chicken #pork belly strip steak pastrami #brisket ground round burgdoggen #beef ribs beef cupim t-bone";
console.log([...new Set (text.split(" ").filter(word => word.charAt(0) === "#"))].join(" ").split(",").join(" ").split(".").join(" ").toLowerCase().split(" ").filter(word => word !== ""));
///

export default Topics;