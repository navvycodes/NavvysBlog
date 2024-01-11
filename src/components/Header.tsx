import React from "react";
import { TabButtons } from "./TabButtons";
import { Typography, Box, Divider } from "@mui/material";
const textStylings = {
  textAlign: "center",
  fontFamily: "Roboto",
  color: "#214E91",
};
const BoxStyles = {
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  //boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};
const DividerStyles = {
  borderColor: "#000000",
};
export const Header = () => {
  return (
    <Box sx={BoxStyles}>
      <Typography variant="h1" component={"h1"} sx={textStylings}>
        Navvy's Blog
      </Typography>
      <TabButtons></TabButtons>
      <Box sx={{ paddingTop: "1%" }}>
        <Divider orientation="horizontal" sx={DividerStyles}></Divider>
      </Box>
    </Box>
  );
};
