export const exerciseOptions = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/status",
  headers: {
    "x-rapidapi-key": "0ae73afa42msh492c768e6f710ddp1f96e6jsnc03826257744",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
