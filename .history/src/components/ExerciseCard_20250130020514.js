import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    // When the exercise card is clicked, it will redirect to the detail page
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt="exercise.name" loading="lazy" />
      <Stack direction={"row"}>
        {/* Exercise body part button */}
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
        {/* Exercise target button */}
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      {/* Exercise name */}
      <Typography
        ml="21px"
        color="#000"
        textTransform="capitalize"
        fontWeight="bold"
        mt="11px"
        pb="10px"
        fontSize="24px"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
