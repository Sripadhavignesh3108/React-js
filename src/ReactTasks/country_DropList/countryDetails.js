import React, { useContext } from "react";
import { ContextDataForCountry } from "./CountrysMainPage";

function CountryDetails() {
  const ContextCountryData = useContext(ContextDataForCountry);
  const { countryName, updateCountry } = ContextCountryData;
  return <div></div>;
}

export default CountryDetails;
