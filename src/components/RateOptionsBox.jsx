import { Box } from "@mui/material";
import React from "react";
import SelectData from "./FilterBoxContainer";
import CreditScore from "./CreditScore";
import Price from "./AmountForm";
import State from "./SelectState";

function RateOptionsBox() {
  return (
    <Box
      width="40%"
      mx={2}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px",
      }}
    >
      <CreditScore />
      <State />
      <Price />
      <SelectData />
    </Box>
  );
}

export default RateOptionsBox;
