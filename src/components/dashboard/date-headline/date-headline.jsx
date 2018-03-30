import React from "react";
import styled from "styled-components";
const date = new Date();

const Main = styled.div``;

const DateHeader = styled.h2`
  text-align: center;
  font-size: 16px;
  color: white;
`;

const Arrow = styled.div`
width:10px
background-color:white;
height:10px`;

class DateHeadline extends React.Component {
  render() {
    return (
      <Main>
        <Arrow />
        <DateHeader>
          {date.toLocaleDateString("en-EN", { month: "long", year: "numeric" })}
        </DateHeader>
      </Main>
    );
  }
}

export default DateHeadline;
