import React from "react";
import { Vortex } from "react-loader-spinner";

function VortexSpinner() {
  return (
    <div
      style={{
        position: "absolute",
        top: "45%",
        left: "45%",
      }}
    >
      <Vortex
        visible={true}
        height="80"
        width="80"
        colors={["red", "green", "blue", "yellow", "orange", "purple"]}
      />
    </div>
  );
}

export default VortexSpinner;
