import React, { useState } from "react";
import { Box } from "@mui/material";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
import HeroBanner from "../components/HeroBanner";

const Home = () => {
  // Kullanıcıya gösterilecek egzersizleri ve vücut bölgesini yönetmek için state'ler
  const [bodyPart, setBodyPart] = useState("all"); // Başlangıçta tüm vücut bölgesi seçili
  const [exercises, setExercises] = useState([]); // Arama sonuçları olan egzersizleri tutar
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={{ setExercises }}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={{ setExercises }}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
    </Box>
  );
};

export default Home;
