import React from "react";
import { Box, Stack, Typography } from "@mui/material";
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
      <Typography>
        Gülümse ve <br /> ve Tekrar Et
      </Typography>
      <Typography>En etkili egzersizleri inceleyi</Typography>
    </Box>
  );
};

export default HeroBanner;
