// import React, { useReducer, useRef, useState } from "react";
// import "./todos.css";
// let dataObject = {
//   todos: {
//     morning: [],
//     afternoon: [],
//     evening: [],
//     night: [],
//   },
// };
// let reducerFunciton = (state, action) => {
//   let newState = { ...state };
//   switch (action.time) {
//     case "morning": {
//       newState.todos.morning = [...newState.todos.morning, action.todoValue];
//       return newState;
//     }
//   }
// };
// export default function ReducerTodos() {
//   const [resultState, dispatch] = useReducer(reducerFunciton, dataObject);
//   console.log(resultState);
//   const inputText = useRef();
//   const inputTime = useRef();
//   let todoHandler = (e) => {
//     console.log(inputTime.current.value);
//     e.preventDefault();
//     dispatch({
//       time: inputTime.current.value,
//       todoValue: inputText.current.value,
//     });
//   };
//   return (
//     <div className="container">
//       <form onSubmit={todoHandler}>
//         <label htmlFor="todo">Todo's Field :</label>
//         <input
//           type="text"
//           placeholder="Enter to Todo Here"
//           required
//           id="todo"
//           ref={inputText}
//         />
//         <label htmlFor="time">Enter Time in Hours :</label>
//         <input
//           type="text"
//           placeholder="24h format"
//           required
//           id="time"
//           ref={inputTime}
//         />
//         <input type="submit" />
//       </form>
//       <div></div>
//     </div>
//   );
// }

import React, { useReducer, useRef } from "react";
import "./todos.css";

let dataObject = {
  todos: {
    morning: [],
    afternoon: [],
    evening: [],
    night: [],
  },
};

let reducerFunction = (state, action) => {
  let newState = { ...state };
  switch (action.time) {
    case "morning":
      newState.todos.morning = [...newState.todos.morning, action.todoValue];
      return newState;
    case "afternoon":
      newState.todos.afternoon = [
        ...newState.todos.afternoon,
        action.todoValue,
      ];
      return newState;
    case "evening":
      newState.todos.evening = [...newState.todos.evening, action.todoValue];
      return newState;
    case "night":
      newState.todos.night = [...newState.todos.night, action.todoValue];
      return newState;
    default:
      return state;
  }
};

export default function ReducerTodos() {
  const [resultState, dispatch] = useReducer(reducerFunction, dataObject);
  console.log(resultState);
  const inputText = useRef();
  const inputTime = useRef();

  let todoHandler = (e) => {
    e.preventDefault();
    dispatch({
      time: inputTime.current.value,
      todoValue: inputText.current.value,
    });
  };
  console.log(resultState);
  return (
    <div className="container">
      <form onSubmit={todoHandler}>
        <label htmlFor="todo">Todo's Field:</label>
        <input
          type="text"
          placeholder="Enter to Todo Here"
          required
          id="todo"
          ref={inputText}
        />
        <label htmlFor="time">Enter Time of Day:</label>
        <select id="time" required ref={inputTime}>
          <option value="morning">Morning</option>
          <option value="afternoon">Afternoon</option>
          <option value="evening">Evening</option>
          <option value="night">Night</option>
        </select>
        <input type="submit" />
      </form>
      <div className="todos-list">
        <h3>Morning</h3>
        <ul>
          {resultState.todos.morning.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
        <h3>Afternoon</h3>
        <ul>
          {resultState.todos.afternoon.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
        <h3>Evening</h3>
        <ul>
          {resultState.todos.evening.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
        <h3>Night</h3>
        <ul>
          {resultState.todos.night.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
