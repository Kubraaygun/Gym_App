import React, { useState, useEffect } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
const SearchExercises = () => {
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", sx: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Bilmeniz Gereken <br /> Harika Egzersizler
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1170px", xs: "350" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value=""
          onChange={(e) => {}}
          placeholder="Egzersiz Ara"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{ bgColor: "#FF2625", color: "#fff" }}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
