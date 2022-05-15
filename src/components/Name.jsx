import React from 'react';

const Name = (props) => {
  return (
    <div>
      <p>성은 {props.lastName} 이고 이름은 {props.firstName} 입니다.</p>
    </div>
  )
};

export default Name;
