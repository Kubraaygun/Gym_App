import React, { useState } from "react";
import { Box } from "@mui/material";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
import HeroBanner from "../components/HeroBanner";

const Home = () => {
  // Kullanıcıya gösterilecek egzersizleri ve vücut bölgesini yönetmek için
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={{ setExercises }} />
      <Exercises />
    </Box>
  );
};

export default Home;
