import { useState } from "react";
import "./App.css";
import MainNavigationPage from "./ReactTasks/Navigation/StaticNavigation/StaticNavigation";
import RecipeReviewCard from "./ReactTasks/ChangingRecipe/RecipeCards";
import NestedNav from "./ReactTasks/Navigation/NestedNavigations/NestedNav";
import RecipeHomeScreen from "./ReactTasks/GlobalStateManagement/RecipeState/RecipeHomeScreen";
import RecipeScreen from "./ReactTasks/GlobalStateManagement/OtherScreens/RecipeScreen";
function App() {
  let [a, ab] = useState("hello");
  let handler = () => {
    ab("mounika");
  };
  return (
    <>
      <RecipeHomeScreen />
      {/* <RecipeScreen /> */}
    </>
  );
}
export default App;
