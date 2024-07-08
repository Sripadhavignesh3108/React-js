import React from "react";
import { Table } from "react-bootstrap";
const styles = {
  border: "2px solid grey",
  fontSize: "18px",
  paddingLeft: "15px",
};
function RecipeTable(prop) {
  let RecipeBody = prop.data;
  // console.log(RecipeBody);
  return (
    <div>
      <Table striped bordered hover style={styles}>
        <thead>
          <tr style={styles}>
            <th
              style={{
                textAlign: "center",
                fontSize: "22px",
                border: "2px solid grey",
              }}
            >
              S.NO
            </th>
            <th
              style={{
                textAlign: "center",
                fontSize: "22px",
                border: "2px solid grey",
              }}
            >
              Recipe Name
            </th>
            <th
              style={{
                textAlign: "center",
                fontSize: "22px",
                border: "2px solid grey",
              }}
            >
              Recipe Image
            </th>
            <th
              style={{
                textAlign: "center",
                fontSize: "22px",
                border: "2px solid grey",
              }}
            >
              Ingregients
            </th>
            <th
              style={{
                textAlign: "center",
                fontSize: "22px",
                border: "2px solid grey",
              }}
            >
              Instructions
            </th>
          </tr>
        </thead>
        <tbody>
          {RecipeBody.map((each) => {
            const { id, name, image, ingredients, instructions } = each;
            return (
              <>
                <tr style={styles}>
                  <td style={styles}>{id}</td>
                  <td style={styles}>{name}</td>
                  <td>
                    <img src={`${image}`} width={400} alt={name} height={400} />
                  </td>
                  <td style={styles}>
                    {ingredients.map((each) => {
                      return <li>{each}</li>;
                    })}
                  </td>
                  <td style={styles}>
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
