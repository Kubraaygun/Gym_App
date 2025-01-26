import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";

// require.context ile ikonları dinamik olarak yükle
const icons = require.context("../assets/icons", false, /\.png$/);
const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  const iconName = `${item.toLowerCase()}.png`; // "Cardio" -> "cardio.png"
  let iconPath;
  try {
    iconPath = icons(`./${iconName}`); // Dinamik olarak ikonları yükle
  } catch (error) {
    console.error(`Icon not found: ${iconName}`);
    iconPath = null;
  }

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
        src={iconPath.default} // Dinamik olarak yüklenen ikonun yolunu kullan
        alt={item}
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
