import React, { useState } from "react";
import { translateText } from "../utils/translate"; // Dosya yolunu düzeltin

const TranslatePage = () => {
  const [text, setText] = useState("Hello, how are you?");
  const [translatedText, setTranslatedText] = useState("");

  const handleTranslate = async () => {
    const translation = await translateText(text); // Çeviriyi almak için fonksiyon çağrısı
    setTranslatedText(translation); // Çevrilen metni ekrana yansıt
  };

  return (
    <div>
      <h1>Text Translation Page</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleTranslate}>Translate</button>
      <p>Translated Text: {translatedText}</p>
    </div>
  );
};

export default TranslatePage;
