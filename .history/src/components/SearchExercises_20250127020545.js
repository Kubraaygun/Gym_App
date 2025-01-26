import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData"; // FetchData'dan gelen seçenekler
import { fetchAndTranslateData } from "../utils/fetchAndTranslateData"; // Çeviri fonksiyonunu içe aktar
import HorizontalScrollBar from "./HorizontalScrollBar";
import { translateText } from "../utils/translator";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      // Body parts verisini çevirerek al
      const bodyPartsData = await fetchAndTranslateData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);
  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises?limit=1000",
        exerciseOptions
      );
      const searchedExercises = exercisesData.filter((item) => {
        // Her bir öğenin string olup olmadığını kontrol et
        const checkIfString = (value) =>
          typeof value === "string" ? value.toLowerCase() : value;

        return (
          checkIfString(item.name).includes(search) ||
          checkIfString(item.target).includes(search) ||
          checkIfString(item.equipment).includes(search) ||
          checkIfString(item.bodyPart).includes(search)
        );
      });

      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", sx: "30px" } }}
        mb="50px"
        textAlign="center"
        color={"#3A1212"}
      >
        Bilmeniz Gereken <br /> Harika Egzersizler
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          value={search}
          height="76px"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Egzersiz Ara"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollBar
          data={bodyParts}
          bodyParts
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
