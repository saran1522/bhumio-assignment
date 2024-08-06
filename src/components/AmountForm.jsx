import React from "react";
import Wrapper from "./Wrapper";
import { useHouseData } from "../Context/HouseDataContext";
import AmountInput from "./AmountInput";

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
    if (e.target.name === "interest" && e.target.value <= 100) {
      handleInterestChange(e.target.value);
      const dp = housePrice * (e.target.value / 100);
      handleDownPaymentChange(dp);
      handleLoanAmountChange(housePrice - dp);
    } else if (
      e.target.name === "downPayment" &&
      e.target.value <= housePrice
    ) {
      handleDownPaymentChange(e.target.value);
      handleInterestChange((e.target.value / housePrice) * 100);
      handleLoanAmountChange(housePrice - e.target.value);
    }
  }

  return (
    <Wrapper>
      <div className="flex flex-col items-start justify-center w-[300px]">
        <label htmlFor="">House Price</label>
        <AmountInput
          name="housePrice"
          placeholder="House Price"
          value={housePrice}
          onChange={handleHousePriceChange}
          sign={"$"}
        />
      </div>
      <div className="flex flex-col items-start justify-center">
        <label htmlFor="downPayment">Down Payment</label>
        <div className="w-[300px] p-2 border border-gray-300 rounded-lg flex gap-1">
          <AmountInput
            name="interest"
            placeholder="Interest Rate"
            value={interest}
            onChange={handleLoanChanges}
            sign={"%"}
          />
          <AmountInput
            name="downPayment"
            placeholder="Down Payment"
            value={downPayment}
            onChange={handleLoanChanges}
            sign={"$"}
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
