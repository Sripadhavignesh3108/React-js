import "./App.css";

import { UsingHooks } from "./HooksInReact/usingHooks";
import Parent from "./Props/parentComponent";
import RegistrationForm from "./Forms/controlledComponent/registationForm";
import LoginForm from "./Forms/uncontrolledComponent/loginForm";
import BasicExample from "./Navigation/navbar";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import NavScrollExample from "./Navigation/navbar";
import ScreenStack from "./ScreensSTACK/stack";
import ContactScreen from "./Screens/contactScreen";
import HomeScreen from "./Screens/homeScreen";
import RecipeData from "./ReactTasks/RecipeData/recipeData";
import RecipeTable from "./ReactTasks/RecipeData/RecipeTable";
import VortexSpinner from "./BasicComponents/CustomSpinners/VortexSpinner";
import DNAspinner from "./BasicComponents/CustomSpinners/DNAspinner";
function App() {
  return (
    <>
      <RecipeData />
      {/* <VortexSpinner /> */}
      {/* <DNAspinner /> */}
    </>
  );
}
export default App;
