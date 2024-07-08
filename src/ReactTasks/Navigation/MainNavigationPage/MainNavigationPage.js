import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Form, Row } from "react-bootstrap";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import RecipeReviewCard from "../../ChangingRecipe/RecipeCards";
import RecipeData from "../../RecipeData/recipeData";
function MainNavigationPage() {
  return (
    <div>
      <nav
        style={{
          padding: "15px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: "10px", marginLeft: "10px" }}>
          <Link to={"/"}>
            <Button variant="outline-primary">Home</Button>
          </Link>
          <Link to={"/products"}>
            <Button variant="outline-primary">Recipe Cards</Button>
          </Link>
          <Link to={"about"}>
            {" "}
            <Button variant="outline-primary">Recipe Table</Button>
          </Link>
          <Button variant="outline-primary">Contact us</Button>
        </div>
        <Form inline>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
              />
            </Col>
            <Col xs="auto">
              <Button type="submit">Submit</Button>
            </Col>
          </Row>
        </Form>
      </nav>
      <Routes>
        <Route path="/products" Component={RecipeReviewCard} />
        <Route path="/about" element={<RecipeData />} />
        <Route path="/" element={<RecipeData />} />
      </Routes>
    </div>
  );
}

export default MainNavigationPage;
