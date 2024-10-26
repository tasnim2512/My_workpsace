import React from 'react';

export default function CustomCheckbox({ label, checked, onChange, className = "", ...props }) {
  return (
    <label className={`custom-checkbox-container text-xs ${className}`}>
      {label}
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        {...props}
      />
      <span className="checkmark"></span>
    </label>
  );
}
