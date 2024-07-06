import React from "react";
import { CirclesWithBar } from "react-loader-spinner";

function CircleSpinnerWithLines() {
  return (
    <div>
      <CirclesWithBar
        height="80"
        width="80"
        color="#4fa94d"
        outerCircleColor="#4fa94d"
        innerCircleColor="#4fa94d"
        barColor="#4fa94d"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{ position: "absolute", top: "42%", left: "45%" }}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default CircleSpinnerWithLines;
