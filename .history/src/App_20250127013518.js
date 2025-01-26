import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";

const TranslateComponent = () => {
  // text ve translatedText için state'leri tanımlıyoruz
  const [text, setText] = useState("Hello, how are you?"); // text başlangıç değerini buraya koyduk
  const [translatedText, setTranslatedText] = useState(""); // translatedText başlangıç değeri boş

  // Çeviriyi tetikleyen fonksiyon
  const handleTranslate = async () => {
    const translation = await translatedText(text); // API'yi çağır ve çeviriyi al
    setTranslatedText(translation); // Çevrilen metni state'e kaydet
  };
};
const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: "1488" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
