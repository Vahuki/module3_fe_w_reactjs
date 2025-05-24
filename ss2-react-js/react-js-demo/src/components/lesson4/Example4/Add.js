import React from 'react';
import Calculator from './Calculator';
function Add(props) {
  const handleClick = () => {
    const a = parseInt(document.querySelector('input').value);
    const b = parseInt(document.querySelector('input').value);
    alert(`The sum of ${a} and ${b} is ${a + b}`);
  };

  return (
    <div>
      <button onClick={handleClick}>Add</button>
    </div>
  );
}
export default Add;