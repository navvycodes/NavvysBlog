import React from "react";
import ReactMarkdown from "react-markdown";
import { Box, Typography, Button } from "@mui/material";
import { CurrentInterests } from "./Helpers/CurrentInterests";

const BoxStyles = {
  width: "40%", // Adjust the width as needed
  margin: "0 auto", // Center the content horizontally
  fontFamily: "Ubuntu", // Specify the font family
  fontSize: "16px", // Specify the font size
  lineHeight: "1.5", // Specify the line height for readability
  //textAlign: "center",
  color: "#3C6EBF",
  justifyContent: "center",
};
export const HomeScreen = () => {
  const [markdownContent, setMarkdownContent] = React.useState("");
  React.useEffect(() => {
    fetch("articles/Home/homepage.md")
      .then((response) => {
        console.log(response);
        return response.text();
      })
      .then((data) => {
        setMarkdownContent(data);
      });
  }, []);
  return (
    <Box sx={BoxStyles}>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </Box>
  );
};
