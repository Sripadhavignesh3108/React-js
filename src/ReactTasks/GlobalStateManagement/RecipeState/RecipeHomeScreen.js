import React, { createContext, useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { Route, Routes, useNavigate } from "react-router-dom";
import RecipeScreen from "../OtherScreens/RecipeScreen";
import axios from "axios";

export const contextData = createContext();

export default function RecipeHomeScreen() {
  let navigate = useNavigate();
  const formDataRef = useRef();
  const [formData, updateForm] = useState("");
  let [ResultData, updateData] = useState([]);
  let [stateCheck, changeState] = useState(false);
  let [navi, setNavi] = useState(true);
  useEffect(() => {
    async function RecipeDataFromApi() {
      let response = axios("https://dummyjson.com/recipes");
      let Result = await response;
      if (Result.status === 200) {
        updateData(() => Result.data.recipes);
      }
    }
    RecipeDataFromApi();
  }, []);
  const searchHandler = (e) => {
    e.preventDefault();
    updateForm(formDataRef.current.value);
    if (formData !== "") {
      changeState(true);
    }
  };
  if (stateCheck === true && formData !== "") {
    setNavi(false);
    setTimeout(() => {
      navigate("/recipe");
    }, 200);
    changeState(false);
  }
  function changeHandler() {
    updateForm(formDataRef.current.value);
    console.log(formData);
  }
  return (
    <div>
      <contextData.Provider
        value={{
          ResultData,
          formData,
        }}
      >
        <Navbar
          expand="lg"
          className="bg-body-tertiary"
          style={{ padding: "25px" }}
        >
          <Container fluid>
            <Form
              className="d-flex"
              style={{
                marginLeft: "50%",
                transform: "translateX(-50%)",
              }}
              onSubmit={searchHandler}
            >
              <Form.Control
                type="search"
                placeholder="Search Recipe"
                className="me-2"
                aria-label="Search"
                name="recipe"
                style={{ width: "350px", fontSize: "16px" }}
                ref={formDataRef}
                onClick={changeHandler}
              />
              <Button
                variant="outline-primary"
                style={{ width: "150px" }}
                onClick={searchHandler}
              >
                Search
              </Button>
            </Form>
          </Container>
        </Navbar>
        {navi ? (
          <div
            style={{
              height: "80vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h3 style={{ color: "red" }}>
              Looks like you doesn't Searched anything !
            </h3>
          </div>
        ) : (
          <Routes>
            <Route path="/recipe" element={<RecipeScreen />} />
          </Routes>
        )}
      </contextData.Provider>
    </div>
  );
}
