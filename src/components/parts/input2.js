import React, { useState } from 'react';

const Input2 = ({ placeholder, type, label, disabled }) => {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div className='dashboard_input_feild'>
      <h3>{label}</h3>
      <input
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        value={username}
        onChange={handleUsernameChange}
      />
    </div>
  );
};

export default Input2;
