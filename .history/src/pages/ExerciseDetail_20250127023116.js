import React, { useEffect, useState } from "react";
import { userParams } from "react-router-dom";
import { Box } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import Detail from "../components/Detail";

const ExerciseDetail=()=>{
const [exerciseDetail, setExerciseDetail]= useState({})
}

const ExerciseDetail = () => {
  return (
    <Box>
      <Detail ExerciseDetail={}/>
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  );
};

export default ExerciseDetail;
