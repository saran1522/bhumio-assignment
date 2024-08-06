import React, { useEffect, useState } from "react";
import RateOptionsBox from "./components/RateOptionsBox";
import { HouseDataProvider } from "./Context/HouseDataContext";
import ChartBox from "./components/ChartBox";
import { useRates } from "./config/useRates";
import Footer from "./components/Footer";

function App() {
  const { ratesData, loading, error } = useRates();
  return (
    <HouseDataProvider>
      <div className="flex flex-col bg-slate-100">
        <div className="flex">
          <ChartBox />
          <RateOptionsBox />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </HouseDataProvider>
  );
}

export default App;
