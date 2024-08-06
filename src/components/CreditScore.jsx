import { Slider } from "@mui/material";
import React from "react";
import Wrapper from "./Wrapper";
import { useHouseData } from "../Context/HouseDataContext";

function CreditScore() {
  const { minFico, maxFico, handleFicoChange } = useHouseData();
  return (
    <Wrapper>
      <div className="w-[300px] border border-gray-300 flex gap-2 flex-col p-2 rounded-lg">
        <div>
          <label htmlFor="credit-score">Credit Score Range: </label>
          <span className="text-primary-400">
            {minFico} - {maxFico}
          </span>
        </div>
        <div className="flex justify-center items-center gap-2">
          <span>300</span>
          <input
            type="range"
            id="credit-score"
            name="creditScore"
            min="300"
            max="850"
            value={minFico}
            onChange={handleFicoChange}
            className="w-full border rounded-full border-gray-400 cursor-pointer appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-transparent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[10px] [&::-webkit-slider-thumb]:w-[20px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary-400"
          />
          <span>850</span>
        </div>
      </div>
    </Wrapper>
  );
}

export default CreditScore;
