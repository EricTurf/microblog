import React from "react";

import styled from "styled-components";
import DateHeadline from "./date-headline/date-headline";

const SideContainer = styled.div`
  background-color: rgb(56, 59, 67);
  width: 50rem;
  height: 100vh;
`;

class DashBoard extends React.Component {
  render() {
    return (
      <SideContainer>
        <DateHeadline />
      </SideContainer>
    );
  }
}

export default DashBoard;
