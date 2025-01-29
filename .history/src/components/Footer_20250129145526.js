import React from "react";
import Logo from "../assets/images/Logo-1.png";
import { Box, Stack, Typography } from "@mui/material";
import { Height } from "@mui/icons-material";
const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems={"center"} px={"40px"} pt={"24px"}>
        <img src={Logo} alt="logo" width="200px" height="90px" />
        <Typography variant="h5" pb="40px" fontFamily="Alegreya" mt="40px">
          Sağlıklı Yaşa, Güçlü Kal! 🏋️
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
