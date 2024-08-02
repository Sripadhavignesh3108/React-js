import "./countryData.css";
import React, { useContext, useEffect, useState } from "react";
import { ContextDataForCountry } from "./CountrysMainPage";

function CountryDetails() {
  const [data, setData] = useState({});
  const ContextCountryData = useContext(ContextDataForCountry);
  const { countryName, updateCountry } = ContextCountryData;

  useEffect(() => {
    if (countryName.name) {
      setData(
        countryName.package.filter((each) => {
          return each.area === countryName.name;
        })
      );
    }
  }, [countryName]);
  if (countryName.name && data.length > 0) {
    let [object] = data;
    console.log(data);
    return (
      <>
        <div className="backgroundDiv">
          <div className="DetailsContainer">
            <img
              src={object.flags.png}
              width={110}
              alt={object.name.common}
              id="circleImage"
            />
            <p style={{ margin: "5px", fontSize: "35px", fontWeight: "500" }}>
              {object.name.common}
            </p>
            <div id="dataOrInfo">
              <p className="DetailsPTAG">
                <span>Capital - </span> {object.capital}
              </p>
              <p className="DetailsPTAG">
                <span>Region - </span> {object.region}
              </p>
              <p className="DetailsPTAG">
                <span>Sub Region - </span> {object.subregion}
              </p>
              <p className="DetailsPTAG">
                <span>Population - </span> {object.population}
              </p>
              <p className="DetailsPTAG">
                <span>Time Zone - </span> {object.timezones}
              </p>
            </div>
            <a
              href={object.maps.googleMaps}
              target="_blank"
              without
              rel="noreferrer"
            >
              For Google Location Click Here
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default CountryDetails;
