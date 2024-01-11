import React from "react";
import { Header } from "./components/Header";
import { HomeScreen } from "./components/sections/HomeScreen";
import { Box } from "@mui/material";

const BoxStyles = {
  backgroundColor: '#EDC787',
  height: '100%',
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflowY: 'auto'
}


function App() {
  return (
    <Box sx={BoxStyles} >
      <Header />
      <HomeScreen/>
    </Box>
  );
}

export default App;
