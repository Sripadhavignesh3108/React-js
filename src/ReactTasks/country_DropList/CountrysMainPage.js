import React, { createContext, useState } from "react";
import CountriesDropList from "./countries_ApiData";
import CountryDetails from "./countryDetails";
import { Route, Routes } from "react-router-dom";
export let ContextDataForCountry = createContext();
function CountrysMainPage() {
  const [countryName, updateName] = useState({});
  return (
    <ContextDataForCountry.Provider value={{ countryName, updateName }}>
      <Routes>
        <Route path="/" element={<CountriesDropList />} />
        <Route path="/details" element={<CountryDetails />} />
      </Routes>
    </ContextDataForCountry.Provider>
  );
}

export default CountrysMainPage;
