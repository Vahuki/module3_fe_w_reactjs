import React from "react";

const DemoOnChange = () => {
    const handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
    }
    return (
        <div>
            <h2>Demo onChange</h2>
            <input type="text" onChange={handleChange} placeholder="Type something" />
        </div>
    );
}
export default DemoOnChange;