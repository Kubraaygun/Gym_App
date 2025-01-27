export const exerciseOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
  },
};

const options = {
  method: "GET",

  headers: {
    "x-rapidapi-key": "5188036574msh0fad0b7a2ef71c3p1fdcffjsn328a3ae50a4c",
    "x-rapidapi-host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
