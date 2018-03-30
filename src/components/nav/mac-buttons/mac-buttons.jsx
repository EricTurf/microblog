import React, { Component } from "react";
import styled from "styled-components";
const Main = styled.div``;
const ButtonContainer = styled.div`
  display: flex;
  position: absolute;
  left: 20px;
  top: 20px;
`;
const Button = styled.div`
  margin-right: 10px;
  border-radius: 50%;
  background-color: ${({ color }) => color || "black"};
  width: 0.75rem;
  height: 0.75rem;
`;

const buttonColors = ["red", "yellow", "green"];
class MacButton extends Component {
  render() {
    return (
      <Main>
        <ButtonContainer>
          {buttonColors.map(color => <Button key={color} color={color} />)}
        </ButtonContainer>
      </Main>
    );
  }
}

export default MacButton;
