import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";
const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant={"h3"}>dsfsdfsfsfs</Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {targetMuscleExercises.length : (
          <HorizontalScrollBar data={targetMuscleExercises} /> : <Loader/>
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
