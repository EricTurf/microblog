import React, { Component } from "react";
import styled from "styled-components";

import MacButtons from "./mac-buttons/mac-buttons";

const SideContainer = styled.div`
  background-color: rgb(56, 59, 67);
  width: 30rem;
  height: 100vh;
`;

class Nav extends Component {
  render() {
    return (
      <SideContainer>
        <MacButtons />
      </SideContainer>
    );
  }
}

export default Nav;
