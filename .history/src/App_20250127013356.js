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

  return (
    <Box>
      <Typography variant="h5">Original Text:</Typography>
      <Typography>{text}</Typography>
      <Button onClick={handleTranslate} variant="contained" color="primary">
        Translate to Turkish
      </Button>
      <Typography variant="h5" mt={2}>Translated Text:</Typography>
      <Typography>{translatedText}</Typography>
    </Box>
  );
};

export default TranslateComponent;
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
