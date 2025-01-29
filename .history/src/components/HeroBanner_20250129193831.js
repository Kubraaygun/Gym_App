import React from "react";
import { Box, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.jpg";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { useMediaQuery } from "@mui/material";

const HeroBanner = () => {
  const isVeryLargeScreen = useMediaQuery("(min-width:1600px)");

  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
      textAlign="center"
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
        style={{ borderBottomLeftRadius: "100px" }}
      />

      {/* Eğer ekran çok büyükse, ortada ikon göster */}
      {isVeryLargeScreen && (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#ff2625",
            borderRadius: "50%",
            padding: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          <FitnessCenterIcon sx={{ fontSize: 80, color: "#fff" }} />
        </Box>
      )}
    </Box>
  );
};

export default HeroBanner;
