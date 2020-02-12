import React from "react";

export const withClassName = Component => props => {
   console.log(props);
    return (
        <Component {...props} />
)}

const MyComp = ({tutuBack, clicks}) => {
    return (
    <div>
        <h1 className={tutuBack}>Karlo</h1>
        <button>Press</button>
        <span className={tutuBack}>{clicks}</span>
    </div>
)}


const MyCompWithClassName = withClassName(MyComp);

export default MyCompWithClassName;