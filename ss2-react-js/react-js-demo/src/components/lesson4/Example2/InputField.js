import React from "react";

function InputField(porst){
    return (
        <div>
            <label htmlFor={porst.id}>{porst.label}</label>
            <input type={porst.type} id={porst.id}  />
        </div>
    );
}
export default InputField;