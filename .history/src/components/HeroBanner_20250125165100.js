import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", sx: "700px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Salonu
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", sx: "40px" } }}
      >
        Gülümse ve <br /> ve Tekrar Et
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={3}>
        En etkili egzersizleri inceleyin
      </Typography>
      <Button variant="contained" color="error" href="#exercises">
        Egzersiz keşfedin
      </Button>
      <Typography>Exercise</Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
