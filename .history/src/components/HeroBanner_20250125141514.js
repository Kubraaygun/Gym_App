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
      fontSize="26px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Salonu
      </Typography>
    </Box>
  );
};

export default HeroBanner;
