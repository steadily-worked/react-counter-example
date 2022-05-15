import React from 'react';
import './Counter.css';

const Counter = () => {
  const count = 0;
  return (
    <div className="Container">
      <div className="Title">현재 숫자는 {count}입니다. 😎</div>
      <div className="ButtonContainer">
        <button className="Button">+1</button>
        <button className="Button">-1</button>
      </div>
    </div>
  );
};

export default Counter;
