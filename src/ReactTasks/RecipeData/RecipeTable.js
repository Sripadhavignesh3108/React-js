import React from "react";
import { Table } from "react-bootstrap";
import RecipeData from "./recipeData";
const styles = {
  border: "2px solid grey",
  fontSize: "18px",
};
function RecipeTable(prop) {
  let RecipeBody = prop.data;
  console.log(RecipeBody);
  return (
    <div>
      <Table striped bordered hover style={styles}>
        <thead>
          <tr style={styles}>
            <th style={{ textAlign: "center", fontSize: "22px" }}>S.NO</th>
            <th style={{ textAlign: "center", fontSize: "22px" }}>
              Recipe Name
            </th>
            <th style={{ textAlign: "center", fontSize: "22px" }}>
              Recipe Image
            </th>
            <th style={{ textAlign: "center", fontSize: "22px" }}>
              Ingregients
            </th>
            <th style={{ textAlign: "center", fontSize: "22px" }}>
              Instructions
            </th>
          </tr>
        </thead>
        <tbody>
          {RecipeBody.map((each) => {
            const { id, name, image, ingredients, instructions } = each;
            return (
              <>
                <tr>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>
                    <img src={`${image}`} width={400} alt={name} height={400} />
                  </td>
                  <td>
                    {ingredients.map((each) => {
                      return <li>{each}</li>;
                    })}
                  </td>
                  <td>
                    {instructions.map((each) => {
                      return <li>{each}</li>;
                    })}
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default RecipeTable;
