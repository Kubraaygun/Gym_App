import React from "react";
import { Box } from "@mui/material";
import BodyPart from "./BodyPart";
import ".";

const HorizontalScrollBar = ({ data, bodyParts, bodyPart, setBodyPart }) => {
  return (
    <div>
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
    </div>
  );
};

export default HorizontalScrollBar;
