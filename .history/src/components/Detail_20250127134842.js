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
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography>{name}</Typography>
        <Typography>
          Egzersiz sizi güçlü tutar.
          <span style={{ textTransform: "capitalize" }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you
          improve your <br /> mood and gain energy.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Detail;
