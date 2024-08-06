import React from "react";

function FilterItem({ item, curr, handleChange, idx, len }) {
  return (
    <>
      <input
        type="button"
        className={`flex-1 px-2 py-3 text-md cursor-pointer ${
          curr.toString().toLowerCase() === item.toString().toLowerCase()
            ? "bg-primary-400 text-white"
            : "bg-transparent text-gray-700 hover:bg-gray-50"
        }`}
        value={item}
        onClick={handleChange}
      />
      {idx < len - 1 && <div className="w-px bg-gray-200"></div>}
    </>
  );
}

export default FilterItem;
