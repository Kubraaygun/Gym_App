import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";

const TranslateComponent = () => {
  const [text, setText] = useState("Hello, how are you?");
  const [translatedText, setTranslatedText] = useState("");

  // Çeviriyi tetikleyen fonksiyon
  const handleTranslate = async () => {
    const translation = await translateText(text); // API'yi çağır ve çeviriyi al
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
