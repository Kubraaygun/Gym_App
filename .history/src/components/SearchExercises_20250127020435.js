import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseOptions } from "../utils/fetchData"; // FetchData'dan gelen seçenekler
import { fetchAndTranslateData } from "../utils/fetchAndTranslateData"; // Çeviri fonksiyonunu içe aktar
import HorizontalScrollBar from "./HorizontalScrollBar";

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
  
      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );
  
      const translatedExercises = await Promise.all(
        searchedExercises.map(async (exercise) => {
          const translatedExercise = {
            ...exercise,
            name: await translateText(exercise.name),
            target: await translateText(exercise.target),
            equipment: await translateText(exercise.equipment),
            bodyPart: await translateText(exercise.bodyPart),
          };
          return translatedExercise;
        })
      );
  
      setExercises(translatedExercises); // Çevrilmiş sonuçları göster
      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
    }
  };
      setExercises(translatedExercises); // Çevrilmiş sonuçları göster
      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
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
