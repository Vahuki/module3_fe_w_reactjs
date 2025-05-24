import { useState } from "react";

function Color(){
    const [backgroud,setBackgroud] = useState ("#FFF")
    const changeBG = (color) =>{
        setBackgroud(color)
    }
    return(
        <div style={{background:backgroud, height: "100vh", padding: "20px" }}>
            <button onClick={() => changeBG("red")}> red</button>
            <br/>
            <button onClick={() => changeBG("blue")}> blue</button>
            <br/>
            <button onClick={() => changeBG("grey")}> grey</button>
        </div>
    );
}
export default Color;