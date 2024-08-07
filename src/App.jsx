import React from "react";
import RateOptionsBox from "./components/RateOptionsBox";
import { HouseDataProvider } from "./Context/HouseDataContext";
import ChartBox from "./components/ChartBox";
import Footer from "./components/Footer";

function App() {
  return (
    <HouseDataProvider>
      <div className="flex flex-col bg-slate-100 text-zinc-800">
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
