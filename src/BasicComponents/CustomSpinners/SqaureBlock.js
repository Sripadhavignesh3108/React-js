import React from "react";
import { Blocks } from "react-loader-spinner";

function SqaureBlock() {
  return (
    <div>
      <Blocks
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="blocks-loading"
        wrapperStyle={{ position: "absolute", top: "42%", left: "45%" }}
        wrapperClass="blocks-wrapper"
        visible={true}
      />
    </div>
  );
}

export default SqaureBlock;
