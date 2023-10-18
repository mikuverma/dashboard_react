import React, { useState } from 'react';

const Input = ({ placeholder, type, label }) => {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div className='form_input_feild'>
      <h3>{label}</h3>
      <input
        placeholder={placeholder}
        type={type}
        value={username}
        onChange={handleUsernameChange}
      />
    </div>
  );
};

export default Input;
