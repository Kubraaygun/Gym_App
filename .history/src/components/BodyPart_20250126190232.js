import React from "react";
import { Stack, Typography } from "@mui/material";
import iconGymList from "../utils/iconGymList";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  const iconName = item.toLowerCase().replace(/\s/g, "");
  // Dinamik olarak iconGymList nesnesinden ikonu alıyoruz
  const iconPath = iconGymList[iconName] || iconGymList.all;
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
      onclick={() => setBodyPart(item)}
    >
      <img
        src={iconPath}
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
