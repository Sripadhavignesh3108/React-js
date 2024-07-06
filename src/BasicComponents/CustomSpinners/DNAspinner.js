import React from "react";
import { DNA } from "react-loader-spinner";

function DnaSpinner() {
  return (
    <div>
      <DNA
        visible={true}
        height="90"
        width="90"
        ariaLabel="dna-loading"
        wrapperStyle={{ position: "absolute", top: "42%", left: "45%" }}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
}

export default DnaSpinner;
