import React from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.jpg";

const HeroBanner = () => {
  const isSmallScreen = useMediaQuery("(max-width:1200px)");
  const isLargeScreen = useMediaQuery("(min-width:2000px)");

  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        p: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: isSmallScreen || isLargeScreen ? "center" : "flex-start",
        textAlign: isSmallScreen || isLargeScreen ? "center" : "left",
        ml: isSmallScreen || isLargeScreen ? "0px" : { sm: "50px" },
      }}
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Salonu
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
        color={"#3A1212"}
        fontFamily="Alegreya"
      >
        Gülümse ve <br /> Tekrar Et
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
      <img
        src={HeroBannerImage}
        alt="banner"
        className="hero-banner-img"
        style={{
          borderBottomLeftRadius: "100px",
          height: "90%",
          width: "10%",
          maxWidth: "600px",
        }}
      />
    </Box>
  );
};

export default HeroBanner;
