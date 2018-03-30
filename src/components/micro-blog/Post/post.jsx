import React from "react";
import styled from "styled-components";

import User from "../User/user";
import CommentBar from "../CommentBar/comment-bar";

const PostText = styled.p`
color:grey
padding-top:20px`;

const Main = styled.div`
  padding-top: 100px;
`;

export default class Post extends React.Component {
  render() {
    const { postText, name } = this.props;
    return (
      <Main>
        <User name={name} />
        <PostText>{postText}</PostText>
        <CommentBar />
      </Main>
    );
  }
}
