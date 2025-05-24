import React from "react";

const DemoOnSubmit = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted");
    }
    return (
        <div>
            <h2>Demo onSubmit</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter your name" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default DemoOnSubmit;