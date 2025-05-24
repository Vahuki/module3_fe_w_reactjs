import React from "react";

const DemoOnkeyUpAndOnKeyDown = () => {
    const handleKeyUp = (e) => {
        e.preventDefault();
        console.log(e.key);
        if (e.key === "Enter") {
                alert("Enter key pressed");
        }
    }
    const handleKeyDown = (e) => {
        e.preventDefault();
        console.log(e.key);
    }
    return (
        <div>
            <h2>Demo onKeyUp and onKeyDown</h2>
            <input type="text" onKeyUp={handleKeyUp} onKeyDown={handleKeyDown} placeholder="Press any key" />
        </div>
    );
}
export default DemoOnkeyUpAndOnKeyDown;