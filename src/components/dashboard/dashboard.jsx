import React from "react";

import styled from "styled-components";
import DateHeadline from "./date-headline/date-headline";
import Separator from "./separator/separator";
import Graph from "./graph/graph";
import PieChart from "./pie-chart/pie-chart";

const SideContainer = styled.div`
  position: relative;

  background-color: rgb(56, 59, 67);
  width: 80rem;
  height: 100vh;
`;
const GraphBarContainer = styled.div`
  display: flex;
  padding-left: 75px;
  padding-right: 75px;
`;

const graphBars = [
  { height: "100px", number: 12, isActive: false },
  { height: "160px", number: 13, isActive: true },
  { height: "100px", number: 14, isActive: false },
  { height: "80px", number: 15, isActive: false },
  { height: "60px", number: 16, isActive: false },
  { height: "40px", number: 17, isActive: false }
];

class DashBoard extends React.Component {
  render() {
    return (
      <SideContainer>
        <DateHeadline />
        <Separator />
        <GraphBarContainer>
          {graphBars.map(({ height, number, isActive }) => (
            <Graph
              key={number}
              height={height}
              number={number}
              isActive={isActive}
            />
          ))}
        </GraphBarContainer>
        <Separator />
        <PieChart />
      </SideContainer>
    );
  }
}

export default DashBoard;
