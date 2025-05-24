import React from "react";

const CountrySelect = ({ handleSelect }) => {
    const handleChange = (e) => {
        const code = e.target.value;
        handleSelect(code); // chỉ truyền mã quốc gia lên cha
    };
    return (
        <div>
            <select onChange={handleChange}>
                <option value="vn">Vietnam</option>
                <option value="jp">Japan</option>
                <option value="us">United States</option>
            </select>
        </div>
    );
}
export default CountrySelect;