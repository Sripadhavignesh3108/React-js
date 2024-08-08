import { useEffect, useState } from "react";
import "./App.css";
import CountrysMainPage from "./ReactTasks/country_DropList/CountrysMainPage";
import axios from "axios";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchingData();
  }, []);
  async function fetchingData() {
    const options = {
      method: "GET",
      url: "https://exercisedb.p.rapidapi.com/exercises",
      params: {
        limit: "70",
        offset: "0",
      },
      headers: {
        "x-rapidapi-key": "58419453fcmshebd9f6e41be0523p1feeeejsnca19c81374d8",
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setData(response.data);
    } catch (error) {}
  }
  console.log(data);
  return (
    <>
      {data.map((each) => {
        return <img src={each.gifUrl} />;
      })}
    </>
  );
}
export default App;
