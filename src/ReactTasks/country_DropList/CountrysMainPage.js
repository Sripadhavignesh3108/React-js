import React, { createContext, useState } from "react";
import CountriesDropList from "./countries_ApiData";
import CountryDetails from "./countryDetails";
export let ContextDataForCountry = createContext();
function CountrysMainPage() {
  const [countryName, updateName] = useState("hello");
  return (
    <ContextDataForCountry.Provider value={{ countryName, updateName }}>
      <CountriesDropList />
      <CountryDetails />
    </ContextDataForCountry.Provider>
  );
}

export default CountrysMainPage;
