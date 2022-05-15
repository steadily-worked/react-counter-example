import React, { useState } from 'react';
import Name from './components/Name';
import './App.css';

const App = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  return (
    <div className="Container">
      <div className="title">Props를 배워봅시다 😎</div>
      <div className="input-container">
        <label htmlFor="lastName">성</label>
        <input
          name="lastName"
          id="lastName"
          type="text"
          value={lastName}
          onChange={handleLastNameChange}
        />
        <label htmlFor="firstName">이름</label>
        <input
          name="firstName"
          id="firstName"
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </div>
      <Name firstName={firstName} lastName={lastName} />
    </div>
  );
};

export default App;
