import axios from "axios";

const apiKey = TRANSLATOR_API_KEY; // Azure API anahtarınızı buraya ekleyin
const endpoint =
  "https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&from=en&to=tr";

const translateText = async (text) => {
  const url = endpoint;

  try {
    const response = await axios.post(url, [{ Text: text }], {
      headers: {
        "Ocp-Apim-Subscription-Key": apiKey,
        "Content-Type": "application/json",
      },
    });
    return response.data[0].translations[0].text; // Çevrilen metni döndürür
  } catch (error) {
    console.error("Error translating text:", error);
    return text; // Hata durumunda orijinal metni döndür
  }
};
