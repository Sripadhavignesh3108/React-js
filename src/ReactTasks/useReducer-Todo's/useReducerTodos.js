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
  switch (action.time) {
    case "morning":
      return {
        ...state,
        todos: {
          ...state.todos,
          morning: [...state.todos.morning, action.todoValue],
        },
      };
    case "afternoon":
      return {
        ...state,
        todos: {
          ...state.todos,
          afternoon: [...state.todos.afternoon, action.todoValue],
        },
      };
    case "evening":
      return {
        ...state,
        todos: {
          ...state.todos,
          evening: [...state.todos.evening, action.todoValue],
        },
      };
    case "night":
      return {
        ...state,
        todos: {
          ...state.todos,
          night: [...state.todos.night, action.todoValue],
        },
      };
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
