import { createContext, useContext, useState } from "react";
import { rateData } from "../config/sampleData";

const HouseDataContext = createContext();

export function HouseDataProvider({ children }) {
  // const { ratesData, loading, error } = useRates();
  const { data: chartValues, request: rateParams } = rateData;
  const [currLoanType, setCurrLoanType] = useState(rateParams.loan_type);
  const [currRate, setCurrRate] = useState(rateParams.rate_structure);
  const [currTerm, setCurrTerm] = useState(rateParams.loan_term);
  const [housePrice, setHousePrice] = useState(rateParams.price);
  const [state, setState] = useState(rateParams.state);
  const [minFico, setMinFico] = useState(rateParams.minfico);
  const [maxFico, setMaxFico] = useState(rateParams.maxfico);
  const [loanAmount, setLoanAmount] = useState(rateParams.loan_amount);
  const [downPayment, setDownPayment] = useState(
    rateParams.price - rateParams.loan_amount
  );
  const [interest, setInterest] = useState((downPayment / housePrice) * 100);
  const [currColor, setCurrColor] = useState("#94d2bd");

  const interestRates = Object.keys(chartValues);
  const lenders = Object.values(chartValues);

  const chartData = {
    labels: interestRates,
    datasets: [
      {
        data: lenders,
        label: "hlerlweo",
        backgroundColor: currColor,
        hoverBackgroundColor: "#07beb8",
      },
    ],
  };

  function handleLoanTypeChange(e) {
    setCurrLoanType(e.target.value);
    console.log("updated loan type", e.target.value);
  }

  function handleRateChange(e) {
    setCurrRate(e.target.value);
    console.log("updated rate structure", e.target.value);
  }

  function handleTermChange(e) {
    setCurrTerm(e.target.value);
    console.log("updated loan term", e.target.value);
  }

  function handleHousePriceChange(e) {
    setHousePrice(e.target.value);
    console.log("updated house price", e.target.value);
  }

  function handleStateChange(e) {
    setState(e.target.value);
    console.log("updated state", e.target.value);
  }

  function handleFicoChange(e) {
    setMinFico(Number(e.target.value));
    setMaxFico(Number(e.target.value) + 19);
    console.log("updated min fico", e.target.value);
  }

  function handleMaxFicoChange(e) {
    setMaxFico(e.target.value);
    console.log("updated max fico", e.target.value);
  }

  function handleDownPaymentChange(amount) {
    setDownPayment(amount);
    console.log("updated down payment", amount);
  }

  function handleInterestChange(amount) {
    setInterest(amount);
    console.log("updated interest change", amount);
  }

  function handleLoanAmountChange(amount) {
    setLoanAmount(amount);
    console.log("updated loan amount", amount);
  }

  function handleColorChange(e) {
    setCurrColor(e.target.value);
    console.log("updated color", e.target.value);
  }

  return (
    <HouseDataContext.Provider
      value={{
        chartData,
        rateParams,
        currLoanType,
        currRate,
        currTerm,
        handleLoanTypeChange,
        handleRateChange,
        handleTermChange,
        loanAmount,
        housePrice,
        state,
        minFico,
        maxFico,
        downPayment,
        interest,
        currColor,
        handleHousePriceChange,
        handleStateChange,
        handleMaxFicoChange,
        handleFicoChange,
        handleDownPaymentChange,
        handleInterestChange,
        handleLoanAmountChange,
        handleColorChange,
      }}
    >
      {children}
    </HouseDataContext.Provider>
  );
}

export function useHouseData() {
  const context = useContext(HouseDataContext);
  if (!context) {
    throw new Error("useHouseData must be used within a HouseDataProvider");
  }
  return context;
}
