import React from "react";

const DemoOnMouseEnterAndOnMouseLeave = () => {
    const handleMouseEnter = (e) => {
        e.preventDefault();
        console.log("Mouse entered");
    }
    const handleMouseLeave = (e) => {
        e.preventDefault();
        console.log("Mouse left");
    }
    return (
        <div>
            <h2>Demo onMouseEnter and onMouseLeave</h2>
            <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Hover Me</button>
        </div>
    );
}
export default DemoOnMouseEnterAndOnMouseLeave;