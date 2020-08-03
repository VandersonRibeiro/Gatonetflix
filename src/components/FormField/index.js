import React from 'react';

function FormField({ label, type, name, value, onChange }) {
  const fieldID= 'id_${name}';
  return (
    <div>
      <label
        htmlFor={}
      >
        {label}: 
        <input
        id={}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      </label>
    </div>
  )
}

export default FormField;