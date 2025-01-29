import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import useSearch from "../hooks/useSearch";
import BodyParts from "./BodyParts";
import SearchInput from "./SearchInput";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [bodyParts, setBodyParts] = useState([]);
  const { search, setSearch, handleSearch } = useSearch(setExercises);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", sx: "30px" } }}
        mb="50px"
        textAlign="center"
        color={"#3A1212"}
      >
        Bilmeniz Gereken <br /> Harika Egzersizler
      </Typography>
      <SearchInput
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      <BodyParts
        bodyParts={bodyParts}
        setBodyPart={setBodyPart}
        bodyPart={bodyPart}
      />
    </Stack>
  );
};

export default SearchExercises;
