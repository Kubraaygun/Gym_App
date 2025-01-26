import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";

// require.context ile ikonları dinamik olarak yükle
const icons = require.context("../assets/icons", false, /\.png$/);
const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  const iconName = `${item.toLowerCase()}.png`; // "Cardio" -> "cardio.png"
  const iconPath = require(`../assets/iconGym/${iconName}`).default; // Dinamik olarak ikonları yükle
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "282px",
        cursor: "pointer",
        gap: "47px",
      }}
    >
      <img
        src={iconPath}
        alt="dumbbell"
        style={{ width: "40px", height: "40px" }}
      />
      <Typography
        fontSize="24px"
        fontWeight={"bold"}
        color={"#3A1212"}
        textTransform={"capitalize"}
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
