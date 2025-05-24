import React from "react";
import Child from "./Child";

const Parent4 = () => {
  const handleNotify = (message) => {
    alert("Child send: " + message);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <Child onNotify={handleNotify} />
    </div>
  );
}
export default Parent4;