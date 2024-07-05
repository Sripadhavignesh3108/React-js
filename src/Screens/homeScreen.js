import React from 'react'
import { Link } from 'react-router-dom';

function HomeScreen() {
  return (
    <div>
      <Link to={"/"}>home</Link>
      <Link to={"/about"}>about</Link>
      <Link to={"/contact"}>contact</Link>
      <h1>HOME SCREEN IS HERE</h1>
    </div>
  );
}

export default HomeScreen;