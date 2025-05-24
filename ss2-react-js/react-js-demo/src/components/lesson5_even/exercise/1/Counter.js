import React from "react";
import CounterBtn from "./CountBtn";

let count = 0;

const Counter = () => {
    const handIncrease = () => {
        count++;
        console.log(count);
    };
    const handDecrease = () => {
        count--;
        console.log(count);
    };
    return(
        <CounterBtn handIncrease={handIncrease} handDecrease={handDecrease} />
    )


}
export default Counter;