import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.jpg";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", sx: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Salonu
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", sx: "40px" } }}
        mb="23px"
        mt="30px"
        color={"#3A1212"}
        fontFamily="Alegreya"
      >
        Gülümse ve <br /> ve Tekrar Et
      </Typography>
      <Typography
        fontSize="22px"
        lineHeight="35px"
        mb={3}
        fontFamily="Alegreya"
      >
        En etkili egzersizleri inceleyin
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{ backgroundColor: "#ff2625", padding: "10px" }}
      >
        Egzersiz keşfedin
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize="200px"
      >
        Egzersiz
      </Typography>
      <img src={HeroBannerImage} alt="banner" />
    </Box>
  );
};

export default HeroBanner;
