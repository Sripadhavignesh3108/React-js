import React, { useContext } from "react";
import { contextValue } from "../App";

function SecondContext() {
  let getContextData = useContext(contextValue);

  return (
    <div>
      <h1>{getContextData}</h1>
    </div>
  );
}

export default SecondContext;
