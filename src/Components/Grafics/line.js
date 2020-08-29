import React from "react";

import { Grafic } from "./style";

// import { Container } from './styles';

function LineGrafic() {
  var data = {
    labels: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    series: [[480, 200, 230, 1000, 20, 0, -100, -1, 800, 300, 250, 480]],
  };

  var options = {
    high: 1000,
    low: -10,
    axisX: {
      labelInterpolationFnc: function (value, index) {
        return index % 2 === 0 ? value : null;
      },
    },
  };
  return (
    <div>
      <Grafic
        data={data}
        options={options}
        type="Line"
      />
    </div>
  );
}

export default LineGrafic;
