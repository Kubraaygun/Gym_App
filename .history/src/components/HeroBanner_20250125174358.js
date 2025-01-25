import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";
import styles from "../theme/styles.css";

const HeroBanner = () => {
  return (
    <Box
      className="banner"
      sx={{ mt: { lg: "212px", sx: "700px" }, ml: { sm: "50px" } }}
    >
      <Typography className="banner-title">Fitness Salonu</Typography>
      <Typography
        className="banner-heading"
        sx={{ fontSize: { lg: "44px", sx: "40px" } }}
      >
        Gülümse ve <br /> ve Tekrar Et
      </Typography>
      <Typography className="banner-subtitle" mb={3}>
        En etkili egzersizleri inceleyin
      </Typography>
      <Button
        className="banner-button"
        variant="contained"
        href="#exercises"
        sx={{ backgroundColor: "#ff2625", padding: "19px" }}
      >
        Egzersiz keşfedin
      </Button>
      <Typography
        className="banner-background-text"
        fontWeight={600}
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize="200px"
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
