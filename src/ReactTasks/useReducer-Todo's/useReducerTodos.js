import React, { useReducer, useRef } from "react";
import "./todos.css";
import DisplayTodo from "./DisplayTodo";

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
      if (!state.todos.morning.includes(action.todoValue)) {
        newState.todos.morning = [...newState.todos.morning, action.todoValue];
      }
      return newState;
    case "afternoon":
      if (!state.todos.afternoon.includes(action.todoValue)) {
        newState.todos.afternoon = [
          ...newState.todos.afternoon,
          action.todoValue,
        ];
      }
      return newState;
    case "evening":
      if (!state.todos.evening.includes(action.todoValue)) {
        newState.todos.evening = [...newState.todos.evening, action.todoValue];
      }
      return newState;
    case "night":
      if (!state.todos.night.includes(action.todoValue)) {
        newState.todos.night = [...newState.todos.night, action.todoValue];
      }
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
    inputText.current.value = "";
  };

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
          name="todo"
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
      <DisplayTodo data={resultState} />
    </div>
  );
}
