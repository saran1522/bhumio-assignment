import React from "react";
import FilterItem from "./FilterItem";

function FilterBox({ items, currType, handleChange }) {
  return (
    <div className="flex overflow-hidden border border-gray-300 w-[300px] rounded-lg">
      {items.map((item, i) => (
        <FilterItem
          key={i}
          item={item}
          curr={currType}
          handleChange={handleChange}
          idx={i}
          len={items.length}
        />
      ))}
    </div>
  );
}

export default FilterBox;
