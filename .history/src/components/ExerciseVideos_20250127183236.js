import React from "react";
import { Box, Stack, Typography } from "@mui/material";
const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos?.length) return "Yükleniyor..";
  return (
    <Box sx={{ marginTop: { lg: "200px", sx: "20px" } }} p="20px">
      <Typography variant="h3" mb="33px">
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>
        Egzersiz Videolarını İzleyin
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems={"center"}
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "110px", xs: "0" },
        }}
      >
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://wwww.youtube.com/watch?v=${item.vide.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
