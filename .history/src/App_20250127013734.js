import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import { translateText } from "./utils/translate"; // Burada utils/translate.js dosyasını import ettik

const TranslateComponent = () => {
  const [text, setText] = useState("Hello, how are you?");
  const [translatedText, setTranslatedText] = useState("");

  const handleTranslate = async () => {
    const translation = await translateText(text);
    setTranslatedText(translation);
  };

  return (
    <Box>
      <Typography variant="h6">Original Text:</Typography>
      <Typography>{text}</Typography>
      <Button onClick={handleTranslate} variant="contained" color="primary">
        Translate to Turkish
      </Button>
      <Typography variant="h6" mt={2}>
        Translated Text:
      </Typography>
      <Typography>{translatedText}</Typography>
    </Box>
  );
};

const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
      <TranslateComponent />
    </Box>
  );
};

export default App;
