import React from 'react';
import { Form } from 'react-bootstrap';

const Select = ({ options, label, value, onChange }) => {
  return (
    <div className='dashboard_select_field'>
      <h3>{label}</h3>
      <Form.Select value={value} onChange={onChange}>
        {options.map(option => (
          <option key={option.value} value={option.value} className='bg-primary'>
            <span className={`bi-${option.icon}`} /> {option.label}
          </option>
        ))}
      </Form.Select>
    </div>
  );
};
 
export default Select;
