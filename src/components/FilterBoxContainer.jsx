import React from "react";
import FilterBox from "./FilterBox";
import Wrapper from "./Wrapper";
import { useHouseData } from "../Context/HouseDataContext";

function FilterBoxContainer() {
  const loanTypeData = ["CONF", "FHA", "VA"];
  const rateData = ["15 Years", "20 Years", "30 Years"];
  const termData = ["Fixed", "Adjustable"];
  const {
    currLoanType,
    currRate,
    currTerm,
    handleLoanTypeChange,
    handleRateChange,
    handleTermChange,
  } = useHouseData();
  return (
    <Wrapper>
      <FilterBox
        items={loanTypeData}
        currType={currLoanType}
        handleChange={handleLoanTypeChange}
      />
      <FilterBox
        items={rateData}
        currType={currTerm}
        handleChange={handleTermChange}
      />
      <FilterBox
        items={termData}
        currType={currRate}
        handleChange={handleRateChange}
      />
    </Wrapper>
  );
}

export default FilterBoxContainer;
