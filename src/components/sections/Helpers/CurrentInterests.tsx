import { Box, Typography, ImageList, ImageListItem } from "@mui/material";
import React from "react";
import interest1 from "../../images/MeadMaking.png";
import interest2 from "../../images/Fifa.png";

export const CurrentInterests = () => {
  const itemData = [
    {
      img: interest1,
      title: "Mead Making",
    },
    {
      img: interest2,
      title: "Fifa",
    },
  ];
  return (
    <Box>
      <ImageList variant="masonry" cols={4}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};
