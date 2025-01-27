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
        <Typography variant="h3">{name}</Typography>
        <Typography>
          Egzersiz sizi güçlü tutar. {name} {``}
          <span style={{ textTransform: "capitalize" }}>{name}</span> bup en
          iyilerden biridir <br /> hedefinize yönelik egzersizler{target}. Bu,
          sizin geliştirmenize yardımcı olacaktır. <br /> Ruh halinizi düzeltin
          ve enerji kazanın.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Detail;
