const axios = require("axios"); // Axios ile API'ye istek göndereceğiz

const apiKey = TRANSLATOR_API_KEY; // Azure'dan aldığınız API anahtarını buraya ekleyin
const endpoint = `https://${region}.api.cognitive.microsoft.com/translate?api-version=3.0&from=en&to=tr`;

const translateText = async (text) => {
  try {
    const response = await axios.post(endpoint, [{ Text: text }], {
      headers: {
        "Ocp-Apim-Subscription-Key": apiKey,
        "Content-Type": "application/json",
      },
    });
    return response.data[0].translations[0].text;
  } catch (error) {
    console.error("Translation failed", error.message);
    return text; // Çeviri başarısız olursa orijinal metni döndür
  }
};

app.post("/translate", async (req, res) => {
  const { text } = req.body; // Frontend'den gelen metni alıyoruz

  try {
    const translatedText = await translateText(text);
    // Çevrilen metni frontend'e gönderiyoruz
    res.json({ translatedText });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Translation failed", message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = { translateText };
