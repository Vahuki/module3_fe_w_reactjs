import React from "react";

const DemoFocusAndBlur = () => {
    const handleFocus = (e) => {
        e.preventDefault();
        console.log("Input focused");
    }
    const handleBlur = (e) => {
        e.preventDefault();
        console.log("Input blurred");
    }
    return (
        <div>
            <h2>Demo onFocus and onBlur</h2>
            <input type="text" onFocus={handleFocus} onBlur={handleBlur} placeholder="Focus and Blur me" />
        </div>
    );
}
export default DemoFocusAndBlur;