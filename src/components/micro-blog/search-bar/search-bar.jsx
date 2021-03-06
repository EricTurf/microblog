import React, { Component } from "react";
import styled from "styled-components";
import moment from "moment";

const Main = styled.div`
  display: flex;
  height: 120px;
  background-color: rgb(245, 250, 255);
  align-items: center;
  justify-content: flex-start;
`;

const Date = styled.h2`
  padding-left: 100px;
  color: #1f2e59;
  font-family: "PT Sans", sans-serif;
`;

const MagnifyingGlass = styled.div`
  font-size: 2em;
  right: 80px;
  width: 0.5em;
  height: 0.5em;
  border: 0.07em solid #030856;
  position: absolute;
  border-radius: 0.35em;
  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    right: -0.25em;
    bottom: -0.1em;
    border-width: 0;
    background: #030856;
    width: 0.35em;
    height: 0.07em;
    transform: rotate(45deg);
  }
  &:hover {
    cursor: pointer;
  }
`;

class SearchBar extends Component {
  render() {
    return (
      <Main>
        <MagnifyingGlass />
        <Date>{`${moment()
          .date(23)
          .format("d")}
          ${moment()
            .month(Math.floor(Math.random() * 11))
            .format("MMMM")}`}</Date>
      </Main>
    );
  }
}

export default SearchBar;
