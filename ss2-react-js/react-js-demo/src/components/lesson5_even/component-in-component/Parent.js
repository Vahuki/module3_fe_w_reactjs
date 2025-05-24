import React from "react";
import Child from "./Child";

const Parent = () => {
    const handleClick = (e) => {
        e.preventDefault();
        alert(" Child Button clicked");
    }
    return (
        <div>
            <h2>Parent Component</h2>
            <Child handleClick={handleClick}>Click Me</Child>
        </div>
    );
}
export default Parent;