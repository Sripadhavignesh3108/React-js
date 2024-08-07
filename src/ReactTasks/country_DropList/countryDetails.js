import React, { useContext } from "react";
import { ContextDataForCountry } from "./CountrysMainPage";

function CountryDetails() {
  const ContextCountryData = useContext(ContextDataForCountry);
  const { countryName, updateCountry } = ContextCountryData;
  console.log(countryName);
  return <div>CountryDetails</div>;
}

export default CountryDetails;
