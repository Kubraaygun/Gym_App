import React from "react";
import Logo from "../assets/images/Logo-1.png";
import { Box, Stack, Typography } from "@mui/material";
const Footer = () => {
  return (
    <Box mt="50px" bgcolor="#fff3f4">
      <Stack gap="10px" alignItems={"center"} px={"40px"} pt={"24px"}>
        <img src={Logo} alt="logo" width="200px" height="150px" />
        <Typography variant="h5" pb="20px" fontFamily="Alegreya">
          Sağlıklı Yaşa, Güçlü Kal!
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
