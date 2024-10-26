import React from 'react';

const CustomInput = ({ type = 'text', value, onChange, placeholder, className = '' }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full outline-none appearance-none bg-gray-mw-50 px-2 rounded-sm ${className}`}
    />
  );
};

export default CustomInput;
