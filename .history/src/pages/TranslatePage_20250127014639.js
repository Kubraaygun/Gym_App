import React, { useState } from "react";
import { translateText } from "../utils/translate"; // translate.js dosyasından fonksiyonu import ediyoruz

const TranslatePage = () => {
  const [text, setText] = useState(""); // Kullanıcının girdiği İngilizce metin
  const [translatedText, setTranslatedText] = useState(""); // Çevrilen Türkçe metin

  const handleTranslate = async () => {
    if (text) {
      // Metni çevir
      const translation = await translateText(text);
      setTranslatedText(translation); // Çevrilen metni state'e kaydet
    }
  };

  return (
    <div>
      <h1>Text Translation</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)} // Kullanıcının girdiği metni al
        placeholder="Enter English text"
      />
      <button onClick={handleTranslate}>Translate</button>
      {translatedText && <p>Translated Text: {translatedText}</p>}{" "}
      {/* Sadece çevrilen metni göster */}
    </div>
  );
};

export default TranslatePage;
