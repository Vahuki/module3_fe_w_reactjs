import React from "react";

const DemoOnClick = () => {
    const handleClick = (e) => {
        e.preventDefault();
        console.log("Button clicked");
    }
    return (
        <div>
            <h2>Demo onClick</h2>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}
export default DemoOnClick;