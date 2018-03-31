import React from "react";
import styled from "styled-components";
const date = new Date();

export default class CommentBar extends React.Component {
  constructor() {
    super();
    this.state = { likes: Math.floor(Math.random() * 30), liked: false };
  }
  handleLike = () =>
    this.setState(
      {
        likes: this.state.liked ? this.state.likes - 1 : this.state.likes + 1
      },
      this.setState({ liked: !this.state.liked })
    );

  render() {
    return (
      <CommentBarMain>
        <DateComment>{`${date.toLocaleDateString("en-EN", {
          month: "long"
        })}, ${date.toLocaleDateString("en-EN", {
          day: "numeric"
        })}`}</DateComment>
        <CommentLikeContainer>
          <Likes onClick={this.handleLike}>{`${this.state.likes} Likes`}</Likes>
          <Line>
            <Separator x1="0" y1="0" x2="0" y2="40" />
          </Line>
          <Comments>{`${2} Comments`}</Comments>
        </CommentLikeContainer>
      </CommentBarMain>
    );
  }
}

const DateComment = styled.p`
  color: #a1a5b0;
  font-family: "PT Sans", sans-serif;
`;
const CommentBarMain = styled.div`
display:flex
position:relative;
border-bottom:solid 1px #e3e3e3;

`;
const CommentLikeContainer = styled.div`
position:absolute;
right:10px;
display:flex
justify-content:space-between;
`;

const Comments = styled.p`
  padding-left: 15px;
  font-family: "PT Sans", sans-serif;
  cursor: pointer;
  color: #1f2e59;
`;

const Likes = styled.p`
  cursor: pointer;
  color: #215af1;
  font-family: "PT Sans", sans-serif;
  padding-right: 25px;
`;

const Separator = styled.line`
  stroke: #e3e3e3;
  stroke-width: 2;
`;

const Line = styled.svg`
  height: 100px;
  width: 10px;
  padding-top: 5px;
`;
