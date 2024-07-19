import React from "react";
import ConsoleLoggingHOC from "./ConsoleLoggingHOC";

function DisplayScreenForHoc(props) {
  console.log(props);
  return <h1>{props.name}</h1>;
}
export default ConsoleLoggingHOC(DisplayScreenForHoc);
