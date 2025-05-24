import { useState } from "react";
function DemoState() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("John Doe");
    const [age, setAge] = useState(25);
    const [color, setColor] = useState("red");

    return (
        <div>
            <h1>Demo State</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>Name: {name}</p>
            <button onClick={() => setName("John Doe")}>Reset Name</button>
            <button onClick={() => setName("Huu Kien")}>Change Name</button>
            <p>Age: {age}</p>
            <button onClick={() => setAge(age - 1)}>Decrease Age</button>
            <button onClick={() => setAge(age + 1)}>Increment Age</button>
            
            <p >Color: <span style={{color : `${color}`}}> {color}</span> </p>
            <button style={{color:"blue"}} onClick={() => setColor("blue")}>Blue</button>
            <button style={{color:"black"}} onClick={() => setColor("black")}>black</button>
            <button style={{color:"green"}} onClick={() => setColor("green")}>Green</button>
        </div>
    );
}
export default DemoState;