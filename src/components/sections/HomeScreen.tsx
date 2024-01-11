import React from "react";
import { Box, Typography, Button } from "@mui/material";

const BoxStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  paddingTop: "5%",
  width: "100%",
  fontSize: "calc(10px + 2vmin)",
  //boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  borderRadius: "8px",
};
export const HomeScreen = () => {
  return (
    <Box sx={BoxStyles}>
      <Typography variant="h4" gutterBottom>
        Welcome to my blog!
      </Typography>
      <Typography variant="body1" paragraph>
        I'm honestly just using this to convey opinions I have and let the 5 of
        you that read this know what I'm up to!
      </Typography>
      <Typography variant="body1" paragraph>
        Feel free to reach out to me over email and check out the GitHub page
        for this site{" "}
        <a
          href="https://github.com/navvycodes/navvysblog"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </Typography>
      <Button
        variant="contained"
        color="primary"
        href="mailto:daddynavvy@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Email Me
      </Button>
    </Box>
  );
};
