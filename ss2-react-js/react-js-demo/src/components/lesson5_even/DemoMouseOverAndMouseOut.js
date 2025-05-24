import React from "react";
 
const DemoMouseOverAndMouseOut = () => {
    const handleMouseOver = (e) => {
        e.preventDefault();
        console.log("Mouse over");
    }
    const handleMouseOut = (e) => {
        e.preventDefault();
        console.log("Mouse out");
    }
    return (
        <div>
            <h2>Demo onMouseOver and onMouseOut</h2>
            <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Hover Me</button>
        </div>
    );
}
export default DemoMouseOverAndMouseOut;