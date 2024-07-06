import React from "react";
import { Vortex } from "react-loader-spinner";

function VortexSpinner() {
  return (
    <div>
      <Vortex
        visible={true}
        height="90"
        width="90"
        ariaLabel="vortex-loading"
        wrapperStyle={{
          position: "absolute",
          top: "42%",
          left: "45%",
        }}
        wrapperClass="vortex-wrapper"
        colors={["red", "green", "blue", "yellow", "orange", "purple"]}
      />
    </div>
  );
}

export default VortexSpinner;
