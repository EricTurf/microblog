import React, { Component } from "react";
import styled from "styled-components";

const Main = styled.div`
  position: absolute;
  margin-top: 30px;
  margin-bottom: 30px;
  border-top: solid 1px black;
  border-bottom: solid 1px grey;
  width: 300px;
  left: 50px;
`;

class Separator extends Component {
  render() {
    return <Main />;
  }
}

export default Separator;
