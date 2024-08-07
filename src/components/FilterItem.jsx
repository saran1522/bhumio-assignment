import React from "react";
import { useHouseData } from "../Context/HouseDataContext";

function FilterItem({ item, curr, handleChange, idx, len }) {
  const { currColor } = useHouseData();
  return (
    <>
      <input
        type="button"
        className={`flex-1 px-2 py-3 text-md cursor-pointer`}
        style={
          curr.toString().toLowerCase() === item.toString().toLowerCase()
            ? { backgroundColor: currColor, color: "white" }
            : {}
        }
        value={item}
        onClick={handleChange}
      />
      {idx < len - 1 && <span className="w-px bg-gray-300"></span>}
    </>
  );
}

export default FilterItem;
