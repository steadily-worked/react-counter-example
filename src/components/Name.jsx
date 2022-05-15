import React from 'react';

const Name = (props) => {
  const { lastName, firstName } = props;
  return (
    <div>
      <p>성은 {lastName} 이고</p>
      <p>이름은 {firstName} 입니다.</p>
    </div>
  )
};

export default Name;
