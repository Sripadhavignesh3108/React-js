import "./otherRecipe.css";
import React, { useContext } from "react";
import { contextData } from "../RecipeState/RecipeHomeScreen";
import DnaSpinner from "../../../BasicComponents/CustomSpinners/DNAspinner";

export default function RecipeScreen() {
  const contextDataPrarent = useContext(contextData);
  let { ResultData, formData } = contextDataPrarent;

  let displayCardsData = ResultData.filter((each) => {
    return each.name.toLowerCase().includes(formData.toLowerCase());
  });
  console.log(displayCardsData);
  return (
    <div className="container">
      {displayCardsData.length <= 0 ? (
        <DnaSpinner />
      ) : (
        displayCardsData.map((obj) => {
          return (
            <div className="card">
              <img
                src={obj.image}
                width={"300px"}
                style={{ borderRadius: 5 }}
                alt={obj.name}
              />
              <h4>{obj.name}</h4>
              <p>
                <b>cusine :</b> {obj.cuisine}
              </p>
              <p>
                <b>ingredients :</b> {obj.ingredients}
              </p>
              <p>
                <b>caloriesPerServing : </b>
                {obj.caloriesPerServing} cal
              </p>
              <p>
                <b>Rating :</b> {obj.rating} / 5
              </p>
            </div>
          );
        })
      )}
    </div>
  );
}
