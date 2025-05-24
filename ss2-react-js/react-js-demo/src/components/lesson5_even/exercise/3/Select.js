import React from "react";
import CountrySelect from "./CountrySelect";

const Select = () => {
    const handleSelect = (code) => {
        const greeting = {
            vn: "Xin chao",
            jp: "Konichiwa",
            us: "Hello",
        };
        // const code = e.target.value;
        console.log(greeting[code]);
    }
    return (
        <div>
            <CountrySelect handleSelect={handleSelect} />
        </div>
    );
}
export default Select;