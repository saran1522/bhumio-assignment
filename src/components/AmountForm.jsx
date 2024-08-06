import React, { useState } from "react";
import Wrapper from "./Wrapper";
import { useHouseData } from "../Context/HouseDataContext";

function AmountForm() {
  const {
    loanAmount,
    housePrice,
    interest,
    downPayment,
    handleHousePriceChange,
    handleDownPaymentChange,
    handleInterestChange,
    handleLoanAmountChange,
  } = useHouseData();

  function handleLoanChanges(e) {
    if (e.target.name === "interest") {
      handleInterestChange(e.target.value);
      const dp = housePrice * (e.target.value / 100);
      handleDownPaymentChange(dp);
      handleLoanAmountChange(housePrice - dp);
    } else if (e.target.name === "downPayment") {
      handleDownPaymentChange(e.target.value);
      handleInterestChange((e.target.value / housePrice) * 100);
      handleLoanAmountChange(housePrice - e.target.value);
    }
  }

  return (
    <Wrapper>
      <div className="flex flex-col items-start justify-center">
        <label htmlFor="">House Price</label>
        <input
          type="text"
          name="housePrice"
          placeholder="House Price"
          value={`${housePrice} $`}
          onChange={handleHousePriceChange}
          className="w-[300px] p-2 border border-gray-300 bg-transparent rounded-lg"
        />
      </div>
      <div className="flex flex-col items-start justify-center">
        <label htmlFor="">Down Payment</label>
        <div className="w-[300px] p-2 border border-gray-300 rounded-lg flex gap-1">
          <input
            type="text"
            name="interest"
            placeholder="Interest Rate"
            value={`${interest} %`}
            onChange={(e) => {
              if (e.target.value > 100) return;
              handleLoanChanges(e);
            }}
            className="flex-1 border w-1/2 rounded-lg p-2 bg-transparent border-gray-300"
          />
          <input
            type="text"
            name="downPayment"
            placeholder="Amount"
            value={`${downPayment} $`}
            onChange={(e) => {
              if (housePrice < e.target.value) return;
              handleLoanChanges(e);
            }}
            className="flex-1 border w-1/2 rounded-lg p-2 bg-transparent border-gray-300"
          />
        </div>
      </div>
      <span className="w-[300px] p-2 border border-gray-300 rounded-lg">
        Loan Amount: {`${loanAmount} $`}
      </span>
    </Wrapper>
  );
}

export default AmountForm;
