import React from "react";
import { Box } from "@mui/material";
import BodyPart from "./BodyPart";
import "./styles/horizontal-scroll.css";

const HorizontalScrollBar = ({ data, bodyParts, bodyPart, setBodyPart }) => {
  return (
    <ScrollMenu>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollBar;
