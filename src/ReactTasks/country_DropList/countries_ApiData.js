import "./countryData.css";
import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { ContextDataForCountry } from "./CountrysMainPage";
import { useNavigate } from "react-router-dom";
function CountriesDropList() {
  const refValue = useRef();
  const navigate = useNavigate();
  let [nameArray, updateNameArray] = useState([]);
  let [searchedData, updateSearch] = useState([]);
  let updateCountryName = useContext(ContextDataForCountry);
  const { countryName, updateName } = updateCountryName;
  const CountryGetter = (data) => {
    updateName({ ...countryName, name: data });
    navigate("/details");
  };
  useEffect(() => {
    axiosAPI();
  }, []);
  const axiosAPI = async () => {
    let response = await axios.get("https://restcountries.com/v3.1/all");
    updateNameArray(response.data);
    updateName({ ...countryName, package: response.data });
  };
  const searchHandler = () => {
    updateSearch(
      nameArray.filter((each) =>
        each.name.official
          .toLowerCase()
          .includes(refValue.current.value.toLowerCase())
      )
    );
  };
  return (
    <div>
      <h1 id="title" >COUNTRY FINDER</h1>
      <input
        type="text"
        name="search"
        ref={refValue}
        onChange={searchHandler}
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "25px",
          justifyContent: "center",
          paddingTop: "20px",
        }}
      >
        {searchedData.length > 0 ? (
          <>
            {searchedData.map((each, index) => {
              return (
                <>
                  <div
                    className="cardContainer"
                    onClick={() => CountryGetter(each.area)}
                    key={index}
                  >
                    <img
                      src={each.flags.png}
                      alt={each.name.common}
                      width={150}
                    />
                    <p className="cardNames">{each.name.common}</p>
                    <button>More Info</button>
                  </div>
                </>
              );
            })}
          </>
        ) : (
          <>
            {nameArray.map((each, index) => {
              return (
                <>
                  <div
                    className="cardContainer"
                    onClick={() => CountryGetter(each.area)}
                    key={index}
                  >
                    <img
                      src={each.flags.png}
                      alt={each.name.common}
                      width={150}
                    />
                    <p className="cardNames">{each.name.common}</p>
                    <button>More Info</button>
                  </div>
                </>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default CountriesDropList;
