import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const handlePlusCount = () => {
    setCount(count + 1);
  };
  const handleMinusCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="Container">
      <div className="Title">현재 숫자는 {count}입니다. 😎</div>
      <div className="ButtonContainer">
        <button className="Button" onClick={handlePlusCount}>
          +1
        </button>
        <button className="Button" onClick={handleMinusCount}>
          -1
        </button>
      </div>
    </div>
  );
};

export default Counter;
