import React from "react";
import { Link, useNavigate } from "react-router-dom";

function ContactScreen() {
  const nav=useNavigate()
  const onRoute = () => {
    nav("/")
  };
  return (
    <div>
      <h1>you are in ContactScreen</h1>

      <button onClick={onRoute}>Click to route </button>
      
    </div>
  );
}

export default ContactScreen;
