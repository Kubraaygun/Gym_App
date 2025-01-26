import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";
import iconsGym from "../utils/icons";
const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  // item ile ikonları eşleştir
  const iconIndex = iconsGym.findIndex((icon) =>
    icon.includes(item.toLowerCase())
  );
  const icon = iconsGym[iconIndex] || iconsGym[0]; // Eşleşen ikon varsa onu al, yoksa ilk ikonu al

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
        src={Icon}
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
