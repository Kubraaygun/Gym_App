import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";
import iconsGym from "../utils/icons";
const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  // iconsGym dizisindeki isimleri, item ile eşleştirmek için
  // item'i küçük harf ile kontrol et ve doğru ikonu seç
  const iconName = `${item.toLowerCase()}.png`; // Örneğin "Cardio" -> "cardio.png"
  const icon = iconsGym.find((icon) => icon.includes(iconName)); // Eşleşen ikonu bul

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
      <img src={icon} alt={item} style={{ width: "40px", height: "40px" }} />
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
