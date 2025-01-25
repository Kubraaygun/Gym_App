import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../../assets/images/banner.png";
import "../HeroBanner/HeroBanner.css"; // CSS dosyasını dahil ettik

const HeroBanner = () => {
  return (
    <Box className="hero-banner-container">
      <Typography className="hero-banner-title" color="#FF2625">
        Fitness Salonu
      </Typography>
      <Typography className="hero-banner-heading">
        Gülümse ve <br /> ve Tekrar Et
      </Typography>
      <Typography className="hero-banner-subtitle">
        En etkili egzersizleri inceleyin
      </Typography>
      <Button
        variant="contained"
        href="#exercises"
        className="hero-banner-button"
      >
        Egzersiz keşfedin
      </Button>
      <Typography className="hero-banner-background-text">Exercise</Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
