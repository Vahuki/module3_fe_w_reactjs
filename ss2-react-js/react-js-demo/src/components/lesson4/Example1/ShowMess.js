import React from "react";

function ShowMess(props) {
    
    return (
        <div>
            <li>{props.menu.name}</li>
            <li>{props.menu.price}</li>
            <li>{props.menu.description}</li>
            <h2>Menu</h2>
            <ul>
                {props.item.map((item, index) => (
                    <li key={index}>
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                        <p>{item.description}</p>
                    </li>
                ))}
            </ul>     
        </div>
    );
}
export default ShowMess;