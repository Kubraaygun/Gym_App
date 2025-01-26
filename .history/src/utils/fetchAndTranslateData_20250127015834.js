import axios from "axios";
import { translateText } from "./translator"; // Çeviri fonksiyonunu içe aktar

export const fetchAndTranslateData = async (url, options) => {
  try {
    // API'den veriyi al
    const response = await axios.get(url, options);
    const data = response.data;

    // Veriyi çevir
    const translatedData = await Promise.all(
      data.map(async (item) => {
        // Her bir property için çeviri yap
        const translatedItem = {};
        for (const key in item) {
          if (typeof item[key] === "string") {
            translatedItem[key] = await translateText(item[key]); // Metin ise çevir
          } else {
            translatedItem[key] = item[key]; // Değilse aynen bırak
          }
        }
        return translatedItem;
      })
    );

    return translatedData; // Çevrilmiş veriyi döndür
  } catch (error) {
    console.error("API'den veri alırken hata:", error);
    return [];
  }
};
