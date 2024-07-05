import React from "react";
import { DNA } from "react-loader-spinner";

function DNAspinner() {
  return (
    <div
      style={{
        position: "absolute",
        top: "45%",
        left: "45%",
      }}
    >
      <DNA visible={true} height="90" width="90" />
    </div>
  );
}

export default DNAspinner;
