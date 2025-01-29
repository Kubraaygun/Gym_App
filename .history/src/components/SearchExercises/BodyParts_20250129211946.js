import { Box } from "@mui/material";
import HorizontalScrollBar from "./HorizontalScrollBar";

const BodyParts = ({ bodyParts, setBodyPart, bodyPart }) => (
  <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
    <HorizontalScrollBar
      data={bodyParts}
      isBodyParts
      setBodyPart={setBodyPart}
      bodyPart={bodyPart}
    />
  </Box>
);

export default BodyParts;
