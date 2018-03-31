import React, { Component } from "react";
import styled, { css } from "styled-components";
const Main = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: 150px;
  margin-bottom: 70px;
`;

const glow = css`
  box-shadow: 0px 0px 20px 5px rgba(34, 91, 242, 0.4);
`;
const Circle = styled.div`
  border-radius: 50%;
  position: relative;
  bottom: 10px;
  left: 7px;
  background-color: ${({ isActive }) =>
    isActive ? "#225bf2" : "rgb(55,65,90)"};
  width: 12px;
  height: 12px;
  ${({ isActive }) => {
    if (isActive) return glow;
  }};
`;
const Bar = styled.div`
  position: relative;
  bottom: 10px;
  left: 8px;
  margin-bottom: 10px;
  background-color: ${({ isActive }) =>
    isActive ? "#225bf2" : "rgb(42,43,48)"};
  border-radius: 10px 10px 10px 10px;
  width: 10px;
  height: ${({ height }) => height || "100px"};
  ${({ isActive }) => {
    if (isActive) return glow;
  }};
`;

const Number = styled.h2`
  position: relative;
  font-family: "PT Sans", sans-serif;
  left: 0px;
  bottom: 0px;
  color: white;
`;

class Graph extends Component {
  render() {
    const { isActive, height, number } = this.props;
    return (
      <Main>
        <Bar height={height} isActive={isActive ? 1 : 0} />
        <Circle isActive={isActive ? 1 : 0} />
        <Number>{number}</Number>
      </Main>
    );
  }
}

export default Graph;
