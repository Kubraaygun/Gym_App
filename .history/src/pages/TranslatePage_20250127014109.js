import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { translateText } from "./utils/translate"; // Çeviri fonksiyonunuzu import edin

const TranslateComponent = () => {
  const [text, setText] = useState(""); // Kullanıcıdan alınan metin
  const [translatedText, setTranslatedText] = useState(""); // Çevrilen metin

  // Kullanıcı metni değiştirdiğinde çeviriyi tetikleyen useEffect
  useEffect(() => {
    const handleTranslate = async () => {
      if (text) {
        const translation = await translateText(text); // API çağrısı yapıyoruz
        setTranslatedText(translation); // Çevrilen metni güncelliyoruz
      }
    };

    // Metin değiştiğinde çeviriyi başlat
    handleTranslate();
  }, [text]); // text state'i değiştiğinde çalışır

  return (
    <div>
      <TextField
        value={text}
        onChange={(e) => setText(e.target.value)} // Kullanıcıdan alınan metni güncelliyoruz
        label="Enter text"
        variant="outlined"
        fullWidth
      />
      <div>
        <h3>Translated Text:</h3>
        <p>{translatedText}</p>
      </div>
    </div>
  );
};

export default TranslateComponent;
