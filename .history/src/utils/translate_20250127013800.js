import axios from "axios";

// API anahtarınızı buraya girin
const apiKey = TRANSLATOR_API_KEY;

// API endpoint
const endpoint =
  "https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&from=en&to=tr";

// Çeviriyi yapan fonksiyon
export const translateText = async (text) => {
  try {
    const response = await axios.post(
      endpoint,
      [
        {
          Text: text,
        },
      ],
      {
        headers: {
          "Ocp-Apim-Subscription-Key": apiKey, // API anahtarınızı buraya ekleyin
          "Content-Type": "application/json",
        },
      }
    );

    // Çevrilen metni döndürüyoruz
    return response.data[0].translations[0].text;
  } catch (error) {
    console.error("Çeviri hatası:", error);
    return "Çeviri yapılırken bir hata oluştu";
  }
};
