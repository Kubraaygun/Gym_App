const axios = require("axios"); // Axios ile API'ye istek göndereceğiz

const apiKey = TRANSLATOR_API_KEY; // Azure'dan aldığınız API anahtarını buraya ekleyin
const endpoint = "https://translator-api-123.cognitiveservices.azure.com/";
const translateText = async (text) => {
  const url = `${endpoint}/translate?api-version=3.0&from=en&to=tr`; // Burada 'en' kaynak dili ve 'tr' hedef dili belirtiyoruz

  try {
    const response = await axios.post(
      url,
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

    console.log("Translated Text:", response.data[0].translations[0].text);
  } catch (error) {
    console.error("Error translating text:", error);
  }
};
translateText(text);
