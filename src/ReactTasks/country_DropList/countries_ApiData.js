import "./countryData.css";
import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import VortexSpinner from "../../BasicComponents/CustomSpinners/VortexSpinner";
import { ContextDataForCountry } from "./CountrysMainPage";
function CountriesDropList() {
  const refValue = useRef();
  let [nameArray, updateNameArray] = useState([]);
  let [searchedData, updateSearch] = useState([]);
  let updateCountryName = useContext(ContextDataForCountry);
  const { name, updateName } = updateCountryName;
  const CountryGetter = (data) => {
    updateName(data);
  };
  useEffect(() => {
    axiosAPI();
  }, []);
  const axiosAPI = async () => {
    let response = await axios.get("https://restcountries.com/v3.1/all");
    updateNameArray(response.data);
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
        {nameArray.length > 0 ? (
          <>
            {searchedData.map((each, index) => {
              return (
                <>
                  <div
                    className="cardContainer"
                    onClick={() => CountryGetter(each.name.official)}
                    key={index}
                  >
                    <img
                      src={each.flags.png}
                      alt={each.name.official}
                      width={150}
                    />
                    <p>{each.name.official}</p>
                  </div>
                </>
              );
            })}
          </>
        ) : (
          <>
            <VortexSpinner />
          </>
        )}
      </div>
    </div>
  );
}

export default CountriesDropList;
