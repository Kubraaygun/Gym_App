import { useState } from "react";
import { fetchData, exerciseOptions } from "../utils/fetchData";

const useSearch = () => {
  const [search, setSearch] = useState("");

  const handleSearch = async (setExercises) => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises?limit=1000",
        exerciseOptions
      );
      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );
      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return { search, setSearch, handleSearch };
};

export default useSearch;
