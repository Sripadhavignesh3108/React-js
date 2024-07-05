import axios from "axios";
import React, { useEffect, useState } from "react";
import RecipeTable from "./RecipeTable";
import VortexSpinner from "../../BasicComponents/CustomSpinners/VortexSpinner";
function RecipeData() {
  let [ResultData, updateData] = useState([]);
  useEffect(() => {
    async function RecipeDataFromApi() {
      let response = axios("https://dummyjson.com/recipes");
      let Result = await response;
      if (Result.status === 200) {
        updateData((ResultData = Result.data.recipes));
      }
    }
    RecipeDataFromApi();
  }, []);
  return ResultData == [] ? (
    <VortexSpinner />
  ) : (
    <RecipeTable data={ResultData} />
  );
}

export default RecipeData;
