import React, { useState } from "react";
import { translateText } from "../utils/translator"; // Çeviri fonksiyonunu import ediyoruz

const TranslatePage = () => {
  const [text, setText] = useState(""); // Kullanıcı girdisi
  const [translatedText, setTranslatedText] = useState(""); // Çeviri sonucu

  const handleTranslate = async () => {
    if (text) {
      const result = await translateText(text);
      setTranslatedText(result);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Çeviri Sayfası</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Metin giriniz"
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "300px",
          marginBottom: "10px",
        }}
      />
      <br />
      <button
        onClick={handleTranslate}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#FFF",
          border: "none",
          borderRadius: "5px",
          fontSize: "16px",
        }}
      >
        Çevir
      </button>
      {translatedText && (
        <p style={{ marginTop: "20px", fontSize: "18px" }}>
          Çevrilen Metin: {translatedText}
        </p>
      )}
    </div>
  );
};

export default TranslatePage;
