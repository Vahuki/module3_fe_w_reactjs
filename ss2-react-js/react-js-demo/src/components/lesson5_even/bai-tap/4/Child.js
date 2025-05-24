import React from "react";

const Child = (props) => {


  return (
    <div>
      <h2>Child</h2>
      <button
        onClick={() => props.onNotify("Clicked!")}>
        Click Me
      </button>
    </div>
  );
}
export default Child;