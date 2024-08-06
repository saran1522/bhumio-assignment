import axios from "axios";
import { useState, useEffect } from "react";

export function useRates() {
  const [ratesData, setRatesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    () => {
      async function getData() {
        try {
          const res = await axios.get(
            "http://www.consumerfinance.gov/oah-api/rates/rate-checker?price=200000&loan_amount=180000&minfico=700&maxfico=719&state=AL&rate_structure=fixed&loan_term=30&loan_type=conf&arm_type=5-1",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await res.json();
          console.log(data);
          setRatesData(data);
        } catch (err) {
          setError("Error fetching data");
          console.error(err);
        } finally {
          setLoading(false);
        }
      }
      getData();
    },
    [
      // currLoanType,
      // currRate,
      // currTerm,
      // loanAmount,
      // housePrice,
      // state,
      // minFico,
    ]
  );

  return { ratesData, loading, error };
}
