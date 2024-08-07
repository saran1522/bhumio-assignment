import React from "react";
import { useHouseData } from "../Context/HouseDataContext";
import Wrapper from "./Wrapper";

function SelectColor() {
  const { currColor, handleColorChange } = useHouseData();
  return (
    <Wrapper>
      <div className="flex justify-between items-center gap-2 w-[300px] border border-gray-300 rounded-lg p-4">
        <span>Select Color: </span>
        <input
          type="color"
          value={currColor}
          onChange={handleColorChange}
          className="cursor-pointer"
        />
        <span>{currColor}</span>
      </div>
    </Wrapper>
  );
}

export default SelectColor;
