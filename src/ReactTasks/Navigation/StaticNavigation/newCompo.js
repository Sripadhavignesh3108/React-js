import React from "react";
import { Link } from "react-router-dom";

function NewCompo() {
  return (
    <>
      <div>newCompo</div>
      <div style={{ display: "flex", gap: "10px", marginLeft: "10px" }}>
        <Link to={"/"}>
          <button variant="outline-primary">Home</button>
        </Link>
        <Link to={"/products"}>
          <button variant="outline-primary">Recipe Cards</button>
        </Link>
        <Link to={"about"}>
          {" "}
          <button variant="outline-primary">Recipe Table</button>
        </Link>
        <Link to={"/recipe"}>
          <button variant="outline-primary">my Recipe </button>
        </Link>
      </div>
    </>
  );
}

export default NewCompo;
