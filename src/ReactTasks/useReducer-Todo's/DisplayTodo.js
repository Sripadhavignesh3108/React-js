import { colors } from "@mui/material";
import React, { useEffect } from "react";

function DisplayTodo(prop) {
  let resultState = prop.data;

  const DeleteHandler = (time, className) => {
    document.getElementById(time + className).style.textDecoration =
      "line-through";
    let button = document.getElementById(time + className + "button");
    button.innerHTML = "completed";
    button.style.color = "lightGreen";
  };

  const ListStyles = {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    height: "50px",
    border: "0px",
  };

  const buttonStyles = {
    color: "rgb(210,0,0)",
    fontWeight: "600",
    fontSize: "18px",
    marginRight: "15px",
  };
  return (
    <div className="dataShower">
      <div>
        <h2>Morning Shedule</h2>
        {resultState.todos.morning.map((each, index) => {
          return (
            <>
              <div style={ListStyles}>
                <li key={index} id={"mrng" + index}>
                  {each}
                </li>
                <button
                  onClick={() => {
                    DeleteHandler("mrng", index);
                  }}
                  style={buttonStyles}
                  id={"mrng" + index + "button"}
                >
                  Complete
                </button>
              </div>
            </>
          );
        })}
      </div>
      <div>
        <h2>Afternoon Shedule</h2>
        {resultState.todos.afternoon.map((each, index) => {
          return (
            <>
              <div style={ListStyles}>
                <li key={index} id={"after" + index}>
                  {each}
                </li>
                <button
                  onClick={() => {
                    DeleteHandler("after", index);
                  }}
                  style={buttonStyles}
                  id={"after" + index + "button"}
                >
                  Complete
                </button>
              </div>
            </>
          );
        })}
      </div>
      <div>
        <h2>Evening Shedule</h2>
        {resultState.todos.evening.map((each, index) => {
          return (
            <>
              <div style={ListStyles}>
                <li key={index} id={"even" + index}>
                  {each}
                </li>
                <button
                  onClick={() => {
                    DeleteHandler("even", index);
                  }}
                  style={buttonStyles}
                  id={"even" + index + "button"}
                >
                  Complete
                </button>
              </div>
            </>
          );
        })}
      </div>
      <div>
        <h2>Night Shedule</h2>
        {resultState.todos.night.map((each, index) => {
          return (
            <>
              <div style={ListStyles}>
                <li key={index} id={"night" + index}>
                  {each}
                </li>
                <button
                  onClick={() => {
                    DeleteHandler("night", index);
                  }}
                  style={buttonStyles}
                  id={"night" + index + "button"}
                >
                  Complete
                </button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default DisplayTodo;
