import React from "react";
import styled from "styled-components";

export default class User extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <UserMain>
        <Avatar src="http://i.pravatar.cc/300" />
        <UserName>{name}</UserName>
      </UserMain>
    );
  }
}

const Avatar = styled.img`
  border-radius: 50%;
  width: 75px;
  height: 75px;
`;
const UserMain = styled.div`
  display: flex;
`;
const UserName = styled.p`
padding-left:40px
font-family: 'PT Sans', sans-serif;
color:#1f2e59;
font-size:20px;
padding-top:10px;
`;
