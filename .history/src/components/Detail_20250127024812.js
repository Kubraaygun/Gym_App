import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import BodyPart from "./BodyPart";

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";
const Detail = ({ exerciseDetail }) => {
  const { BodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "px", alignItems: "center" }}
    >
      Detail
    </Stack>
  );
};

export default Detail;
