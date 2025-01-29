import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      {/* Muscle group exercises title */}
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px" }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Aynı{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          Kas Grubunu
        </span>{" "}
        Hedef Alan Egzersizler
      </Typography>

      {/* Kas grubu egzersizleri listesi */}
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollBar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      {/* Exercises with equipment title */}
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px" }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Aynı{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          {" "}
          Ekipmanı{" "}
        </span>{" "}
        Kullanan Egzersizler
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {equipmentExercises.length ? (
          <HorizontalScrollBar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
