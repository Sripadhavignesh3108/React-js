import "./otherRecipe.css";
import React, { useContext } from "react";
import { contextData } from "../RecipeState/RecipeHomeScreen";

export default function RecipeScreen() {
  const contextDataPrarent = useContext(contextData);
  let { ResultData, formData } = contextDataPrarent;

  let displayCardsData = ResultData.filter((each) => {
    if (formData.length !== 0) {
      return each.name.toLowerCase().includes(formData.toLowerCase());
    }
  });
  const hoverHandler = (data) => {
    let img = document.getElementById("img" + data);
    img.style.filter = "blur(3px)";
    document.getElementById("description" + data).style.zIndex = "2";
  };
  const LeaveHandler = (data) => {
    let img = document.getElementById("img" + data);
    img.style.filter = "blur(0px)";
    document.getElementById("description" + data).style.zIndex = "0";
  };
  return (
    <div className="container">
      {displayCardsData.length <= 0 ? (
        <div
          style={{
            height: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h3 style={{ color: "red" }}>No recipe found !</h3>
        </div>
      ) : (
        displayCardsData.map((obj) => {
          return (
            <div
              className="card"
              onMouseEnter={() => hoverHandler(obj.name)}
              onMouseLeave={() => LeaveHandler(obj.name)}
            >
              <img
                src={obj.image}
                width={"300px"}
                style={{ borderRadius: 5, zIndex: "1" }}
                alt={obj.name}
                id={"img" + obj.name}
              />
              <div
                style={{ position: "absolute" }}
                id={"description" + obj.name}
                className="recipeDiscription"
              >
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
            </div>
          );
        })
      )}
    </div>
  );
}
