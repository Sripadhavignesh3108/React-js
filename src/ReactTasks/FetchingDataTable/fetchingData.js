import "./fetchingData.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

function FetchingData() {
  let [data, updateData] = useState([]);
  useEffect(() => {
    fetchingData();
  }, []);
  let fetchingData = async () => {
    let response = await axios("https://fakestoreapi.com/products");
    if (response.status === 200) {
      updateData(response.data);
    }
  };
  return (
    <div>
      <table>
        {data.map((each) => {
          return (
            <>
              <tr>
                <td>{each.id}</td>
                <td>{each.title}</td>
                <td>{each.description}</td>
                <td>{each.category}</td>
              </tr>
            </>
          );
        })}
      </table>
    </div>
  );
}

export default FetchingData;
