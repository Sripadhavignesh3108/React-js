import React from "react";
import HomeScreen from "../Screens/homeScreen";
import AboutScreen from "../Screens/aboutScreen";
import ContactScreen from "../Screens/contactScreen";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function ScreenStack() {
  return (
    <>
      {/* <HomeScreen></HomeScreen> */}
      <BrowserRouter>
       
        <Routes>
          <Route path="/" Component={HomeScreen} />
          <Route path="/about" Component={AboutScreen} />
          <Route path="/contact" Component={ContactScreen} />
        </Routes>
      </BrowserRouter>
      ;
    </>
  );
}

export default ScreenStack;
