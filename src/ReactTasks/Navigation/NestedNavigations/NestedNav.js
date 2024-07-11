import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import ScreenList from "../TempScreens/ScreenList";

export default function NestedNav() {
  return (
    <div>
      <Link to={"/home"}>
        <h1>Navigation ScreenList</h1>
      </Link>
      <Link to={"/hello"}>screen1</Link>
      <Routes>
        <Route path="/home/*" element={<ScreenList />} />
        <Route path="/hello" element={<HelloScreen />} />
      </Routes>
    </div>
  );
}

function HelloScreen() {
  return (
    <>
      <h1>Hello Screen</h1>
    </>
  );
}
