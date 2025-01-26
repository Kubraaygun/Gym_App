import React from "react";
import { Stack, Typography } from "@mui/material";
import iconGymList from "../utils/iconGymList";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  const iconName = `${item.toLowerCase().replace(/\s/g, "")}.png`; // "Cardio" -> "cardio.png"
  let iconPath;

  // Dinamik olarak ikonları yükle
  try {
    iconPath = require(`../assets/icons/${iconName}`); // Burada ikonu dinamik olarak yükleyelim
  } catch (error) {
    console.error(`Icon not found: ${iconName}`);
    iconPath = require("../assets/icons/gym.png"); // Varsayılan ikon
  }
  // Dinamik olarak ikonları yükle
  try {
    iconPath = iconGymList(`./${iconName}`); // Dinamik olarak ikonları yükle
  } catch (error) {
    console.error(`Icon not found: ${iconName}`);
    iconPath = iconGymList("./back.png"); // Varsayılan bir ikon göster
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
        src={iconPath} // Dinamik olarak yüklenen ikonun yolunu kullan
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
