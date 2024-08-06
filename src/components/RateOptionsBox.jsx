import { Box } from "@mui/material";
import React from "react";
import FilterBoxContainer from "./FilterBoxContainer";
import CreditScore from "./CreditScore";
import AmountForm from "./AmountForm";
import SelectState from "./SelectState";

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
      <SelectState />
      <AmountForm />
      <FilterBoxContainer />
    </Box>
  );
}

export default RateOptionsBox;
