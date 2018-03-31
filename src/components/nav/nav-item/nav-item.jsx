import React from "react";
import styled from "styled-components";

const Item = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  height: 4rem;
  position: relative;
  &:hover {
    background-color: rgb(37, 85, 219);
    &::before {
      content: "";
      width: 10px;
      height: 2.5rem;
      border-radius: 25%;
      background-color: white;
      position: absolute;
      left: -5px;
    }
  }
`;

const ItemText = styled.h4`
  padding-left: 2.5rem;
  font-family: "PT Sans", sans-serif;
  text-transform: uppercase;
  color: white;
`;

class NavItem extends React.Component {
  render() {
    const { isActive, text } = this.props;

    return (
      <Item>
        <ItemText>{text}</ItemText>
      </Item>
    );
  }
}

export default NavItem;
