import React, { Component } from "react";
import styled, { css } from "styled-components";
const Main = styled.div`
  position: absolute;
  margin-top: 100px;
  left: 75px;
  width: 200px;
  height: 200px;
`;

const dimensions = css`
  height: 100px;
  width: 100px;
`;

const Quarter1 = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  border-top-left-radius: 200px;
  border: solid 10px rgb(36, 96, 246);
  border-bottom: none;
  border-right: none;
  box-shadow: 0px 0px 20px 5px rgba(36, 96, 246, 0.4);
  ${dimensions};
`;
const Quarter2 = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  right: -12px;
  border-radius: 10px 10px 10px 10px;
  border-top-right-radius: 200px;
  border: solid 14px rgb(36, 96, 246);
  border-bottom: none;
  border-left: none;
  box-shadow: 0px 0px 20px 5px rgba(36, 96, 246, 0.4);

  ${dimensions};
`;
const Quarter3 = styled.div`
  position: absolute;
  z-index: 1;
  bottom: -10px;
  border-radius: 10px 10px 10px 10px;
  border-bottom-left-radius: 200px;
  border: solid 14px rgb(36, 96, 246);
  border-top: none;
  border-right: none;
  box-shadow: 0px 0px 20px 5px rgba(36, 96, 246, 0.4);

  ${dimensions};
`;
const Quarter4 = styled.div`
  position: absolute;
  bottom: -10px;
  right: -12px;
  border-bottom-right-radius: 200px;
  border: solid 10px rgb(150, 158, 177);
  border-top: none;
  border-left: none;

  ${dimensions};
`;

const InnerCicle = styled.div`
  position: absolute;
  border-radius: 50%;
  bottom: -1px;
  left: 10px;
  z-index: 2;
  width: 190px;
  height: 190px;
  background-color: rgb(33, 40, 58);
  &::after {
    content: "7";
    font-family: "PT Sans", sans-serif;
    color: white;
    font-size:120px
    bottom:10px;
    right:60px;
    position: absolute;
  }
`;

const SmallCircle = styled.div`
  position: absolute;
  z-index: 3;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: rgb(8, 45, 104);
  bottom: 0;
  right: -35px;
  &::after {
    position: absolute;
    color: white;
    font-size: 10px;
    font-family: "PT Sans", sans-serif;
    content: "DONE";
    bottom: -20px;
    right: 10px;
  }
`;

const InnerSmallCircle = styled.div`
  position: absolute;
  z-index: 4;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: rgb(34, 91, 242);
  bottom: 5px;
  right: -30px;
  &::after {
    content: "5";
    font-family: "PT Sans", sans-serif;
    position: absolute;
    color: white;
    font-size: 30px;
    bottom: 0px;
    left: 12px;
  }
`;

const Message = styled.h4`
  position: absolute;
  font-family: "PT Sans", sans-serif;
  z-index: 5;
  bottom: -75px;
  color: white;
  right: 0;
`;

class PieChart extends Component {
  render() {
    return (
      <Main>
        <Quarter1 />
        <Quarter2 />
        <Quarter3 />
        <Quarter4 />
        <InnerCicle />
        <SmallCircle />
        <InnerSmallCircle />
        <Message>{"Recomended changes"}</Message>
      </Main>
    );
  }
}

export default PieChart;
