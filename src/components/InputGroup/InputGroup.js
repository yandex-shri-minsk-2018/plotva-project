import React from 'react';

import './InputGroup.css';

export function InputGroup(props) {
  const { name, label, type, value, onInputChange } = props;
  return (
      <label className="input-wrapper">
        {label}
        <input className="input-wrapper__input" onChange={onInputChange} type={type} name={name} defaultValue={value} />
      </label>
  );
}

