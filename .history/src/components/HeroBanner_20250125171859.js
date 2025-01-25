import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";
import "./HeroBannerStyles.css";

const HeroBanner = () => {
  return (
    <Box
      className="banner"
      sx={{
        mt: { lg: "212px", sx: "700px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography className="banner-title">Fitness Salonu</Typography>
      <Typography
        className="banner-subtitle"
        sx={{ fontSize: { lg: "44px", sx: "40px" } }}
        mb="23px"
      >
        {/* Diğer içerik */}
      </Typography>
    </Box>
  );
};

export default HeroBanner;
