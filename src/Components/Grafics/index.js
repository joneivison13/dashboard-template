import React from "react";
import Bar from "./bar";
import LineGrafic from "./line";

function Grafics({ type, data }) {
  if (type === "bar") {
    return <Bar data={data} />;
  }
  if (type === "line") {
    return <LineGrafic data={data} />;
  }
}

export default Grafics;
