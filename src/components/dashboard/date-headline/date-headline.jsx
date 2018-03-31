import React from "react";
import styled from "styled-components";
const date = new Date();

const Main = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding-top: 40px;
  justify-content: center;
`;

const DateHeader = styled.h2`
  align-text: center;
  font-family: "PT Sans", sans-serif;
  font-size: 16px;
  color: white;
`;

const Arrow = styled.div`
  border: solid white;
  position: absolute;
  left: 50px;
  border-width: 0 1px 1px 0;
  display: inline-block;

  padding: 7px;
  transform: rotate(135deg);
`;

const RightArrow = Arrow.extend`
  left: auto;
  transform: rotate(-45deg);
  right: 50px;
`;

class DateHeadline extends React.Component {
  render() {
    return (
      <Main>
        <Arrow />
        <DateHeader>
          {date.toLocaleDateString("en-EN", { month: "long", year: "numeric" })}
        </DateHeader>
        <RightArrow />
      </Main>
    );
  }
}

export default DateHeadline;
