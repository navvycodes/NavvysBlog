import React from "react";
import { TabButtons } from "./TabButtons";
import { Typography, Box } from "@mui/material";
const textStylings = {
    textAlign: 'center',
    fontFamily: 'Ubuntu'
}
const BoxStyles = {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    //boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };
export const Header = () => {
  return (
    <Box sx={BoxStyles}>
      <Typography variant="h1" component={"h1"} sx={textStylings}> Navvy's Blog </Typography>
      <TabButtons></TabButtons>
    </Box>
  );
};
