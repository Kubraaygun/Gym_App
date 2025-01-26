import axios from "axios";

const apiKey = process.env.TRANSLATOR_API_KEY; // API anahtarınızı buraya ekleyin
const endpoint = "https://api.cognitive.microsofttranslator.com/";

export const translateText = async (text) => {
  const url = `${endpoint}translate?api-version=3.0&from=en&to=tr`;

  try {
    const response = await axios.post(url, [{ Text: text }], {
      headers: {
        "Ocp-Apim-Subscription-Key": apiKey,
        "Content-Type": "application/json",
      },
    });

    // Çevrilen metni döndür
    return response.data[0].translations[0].text;
  } catch (error) {
    console.error("Error translating text:", error);
    return "Çeviri başarısız oldu"; // Hata durumunda bir mesaj döndür
  }
};
