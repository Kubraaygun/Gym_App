import React from "react";
import { Stack, Typography } from "@mui/material";
import iconGymList from "../utils/iconGymList";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  const iconName = item.toLowerCase().replace(/\s/g, "");
  // We dynamically get the relevant icon from the iconGymList object
  const iconPath = iconGymList[iconName] || iconGymList.all;
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={
        bodyPart === item
          ? {
              borderTop: "4px solid #FF2625",
              background: "#fff",
              borderBottomLeftRadius: "20px",
              width: "270px",
              height: "282px",
              cursor: "pointer",
              gap: "47px",
            }
          : {
              background: "#fff",
              borderBottomLeftRadius: "20px",
              width: "270px",
              height: "282px",
              cursor: "pointer",
              gap: "47px",
            }
      }
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
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
        fontFamily="Alegreya"
        textTransform={"capitalize"}
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
