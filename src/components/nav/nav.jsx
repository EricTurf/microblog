import React, { Component } from "react";
import styled from "styled-components";

import MacButtons from "./mac-buttons/mac-buttons";
import NavItem from "./nav-item/nav-item";

const SideContainer = styled.div`
  background-color: rgb(56, 59, 67);
  width: 45rem;
  height: 100vh;
`;
const ButtonContainer = styled.div`
  padding-bottom: 5rem;
`;

const navItems = ["feed", "events", "people", "news", "music", "jobs"];

class Nav extends Component {
  render() {
    return (
      <SideContainer>
        <ButtonContainer>
          <MacButtons />
        </ButtonContainer>
        {navItems.map(item => <NavItem key={item} text={item} />)}
      </SideContainer>
    );
  }
}

export default Nav;
