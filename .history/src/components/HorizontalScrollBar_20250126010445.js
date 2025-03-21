import React from "react";
import { Box } from "@mui/material";
const HorizontalScrollBar = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <Box key={item.id || item}></Box>
      ))}
    </div>
  );
};

export default HorizontalScrollBar;
