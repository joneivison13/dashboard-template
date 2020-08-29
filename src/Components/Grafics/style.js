import styled from "styled-components";
import ChartistGraph from "react-chartist";

export const Grafic = styled(ChartistGraph)`
  width: 85%;
  background: ${props => props.bg};
  border-radius: 8px;
  margin: 0px auto 0;
  box-shadow: 1px 4px 18px #aaa;

  .ct-label.ct-vertical.ct-start,
  .ct-chart-bar .ct-label.ct-horizontal.ct-end,
  .ct-series-a .ct-bar,
  .ct-series-a .ct-line,
  .ct-series-a .ct-point,
  .ct-series-a .ct-slice-donut,
  .ct-grid,
  .ct-label.ct-horizontal.ct-end {
    color: #fff;
    stroke: #fff;
  }
`;
