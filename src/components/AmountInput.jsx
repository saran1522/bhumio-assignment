import React from "react";

function AmountInput({ name, placeholder, value, onChange }) {
  return (
    <div className="border border-gray-300 rounded-lg w-full">
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="flex-1 rounded-lg p-2 bg-transparent w-4/5"
      />
      <span className="w-1/5">$</span>
    </div>
  );
}

export default AmountInput;
