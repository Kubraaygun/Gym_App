import React from "react";
import { Box, Stack, Typography } from "@mui/material";
const ExerciseVideos = ({ exerciseVideos, name }) => {
  return (
    <Box sx={{ marginTop: { lg: "200px", sx: "20px" } }} p="20px">
      <Typography variant="h3" mb="33px">
        <Span> {name} </Span> Egzersiz Videolarını İzleyin
      </Typography>
    </Box>
  );
};

export default ExerciseVideos;
