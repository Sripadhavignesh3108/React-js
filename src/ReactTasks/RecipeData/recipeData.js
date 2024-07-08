import axios from "axios";
import React, { useEffect, useState } from "react";
import RecipeTable from "./RecipeTable";
import VortexSpinner from "../../BasicComponents/CustomSpinners/VortexSpinner";
export default function RecipeData() {
  let [ResultData, updateData] = useState([]);
  useEffect(() => {
    async function RecipeDataFromApi() {
      let response = axios("https://dummyjson.com/recipes");
      let Result = await response;
      if (Result.status === 200) {
        updateData(() => Result.data.recipes);
      }
    }
    RecipeDataFromApi();
  }, []);
  // console.log(ResultData);
  return (
    <>
      {ResultData.length <= 0 ? (
        <VortexSpinner />
      ) : (
        <RecipeTable data={ResultData} />
      )}
    </>
  );
}
