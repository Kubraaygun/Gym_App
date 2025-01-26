import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
const Exercises = ({ exercises, setExercises, bodyPart }) => {
  return (
    <Box id="exercises" sx={{ mt: { lg: "1100px" } }} mt={"50px"} p={"20px"}>
      <Typography> sonuçları gösteriyor</Typography>
    </Box>
  );
};

export default Exercises;
