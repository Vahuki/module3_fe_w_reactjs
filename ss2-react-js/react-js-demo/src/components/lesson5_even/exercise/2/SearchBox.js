import React from "react";

const SeachBox = ({ handleSearch }) => {
    return (
        <div>
            <input type="text" onChange={handleSearch} />
        </div>
    );
}
export default SeachBox;