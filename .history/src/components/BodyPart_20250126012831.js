import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";
import { Height } from "@mui/icons-material";
const BodyPart = () => {
  return (
    <Stack>
      <img
        src={Icon}
        alt="dumbell"
        styles={{ width: "40px", height: "40px" }}
      />
    </Stack>
  );
};

export default BodyPart;
