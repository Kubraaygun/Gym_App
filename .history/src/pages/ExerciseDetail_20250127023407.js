import React, { useEffect, useState } from "react";
import { useParams, userParams } from "react-router-dom";
import { Box } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import Detail from "../components/Detail";

const ExerciseDetail=()=>{
const [exerciseDetail, setExerciseDetail]= useState({})

const {id} =useParams()
useEffect(()=>{
  const fetchExercisesData = async()=>{}
  fetchExercisesData()
}, [id])
}


  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  );
};

export default ExerciseDetail;
