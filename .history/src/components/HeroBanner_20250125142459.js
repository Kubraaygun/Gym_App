import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
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
      <Typography fontSize="22px" lineHeight="35px">
        En etkili egzersizleri inceleyin
      </Typography>
      <Button variant="contained" color="#FF2625>
        Egzersiz keşfedin
      </Button>
    </Box>
  );
};

export default HeroBanner;
