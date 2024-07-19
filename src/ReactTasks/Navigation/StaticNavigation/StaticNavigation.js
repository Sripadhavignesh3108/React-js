import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Form, Row } from "react-bootstrap";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import RecipeReviewCard from "../../ChangingRecipe/RecipeCards";
import RecipeData from "../../RecipeData/recipeData";
import NewCompo from "./newCompo";
export default function MainNavigationPage() {
  return (
    <div>
      <nav
        style={{
          padding: "15px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* <Form inline>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
              />
            </Col>
            <Col xs="auto">
              <button type="submit">Submit</button>
            </Col>
          </Row>
        </Form> */}
      </nav>{" "}
      <Routes>
        <Route path="/" element={<NewCompo />}></Route>
        <Route path="/products" Component={RecipeReviewCard} />
        <Route path="/about" element={<RecipeData />} />
        <Route path="/recipe" element={<RecipeData />} />
      </Routes>
    </div>
  );
}
