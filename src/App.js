import { createContext, useState } from "react";
import "./App.css";
import SecondContext from "./contextApiTest/secondContext";
export let contextValue = createContext();
function App() {
  const [stateValue, updateState] = useState("hello");
  return (
    <>
      <contextValue.Provider value={stateValue}>
        <SecondContext />
      </contextValue.Provider>
    </>
  );
}
export default App;
