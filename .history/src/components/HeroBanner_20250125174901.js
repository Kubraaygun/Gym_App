import React from "react";
import { Box, Typography, Button } from "@mui/material";
import styles from "./HeroBanner.module.css";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box className={styles.heroBanner}>
      <Typography className={styles.title}>Fitness Salonu</Typography>
      <Typography className={styles.subtitle}>
        Gülümse ve <br /> ve Tekrar Et
      </Typography>
      <Typography className={styles.description}>
        En etkili egzersizleri inceleyin
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        className={styles.exploreButton}
      >
        Egzersiz keşfedin
      </Button>
      <Typography className={styles.watermark}>Exercise</Typography>
      <img src={HeroBannerImage} alt="banner" className={styles.bannerImage} />
    </Box>
  );
};

export default HeroBanner;
