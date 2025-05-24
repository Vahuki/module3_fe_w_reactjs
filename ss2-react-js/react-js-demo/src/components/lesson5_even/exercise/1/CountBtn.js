import React from "react";
const CounterBtn = ({ handIncrease , handDecrease}) => {
    return (
        <div>
            <h2>Counter Button</h2>
            <button onClick={handIncrease}>Increase</button>
            <button onClick={handDecrease}>Decrease</button>
        </div>
    );
}
export default CounterBtn;