import React from "react";
import styled from "styled-components";
import moment from "moment";

export default class CommentBar extends React.Component {
  constructor() {
    super();
    this.state = { likes: Math.floor(Math.random() * 30) };
  }
  handleLike = () => this.setState({ likes: this.state.likes + 1 });

  render() {
    return (
      <CommentBarMain>
        <Date>{`${moment()
          .month(Math.floor(Math.random() * 11))
          .format("MMM")}, ${moment()
          .date(Math.floor(Math.random() * 30))
          .format("d")}`}</Date>
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

const Date = styled.p``;
const CommentBarMain = styled.div`
display:flex
border-bottom:solid 1px grey;
`;
const CommentLikeContainer = styled.div`
position:absolute;
right:30px;
display:flex
justify-content:space-between;
`;

const Comments = styled.p`
  padding-left: 15px;
  cursor: pointer;
`;

const Likes = styled.p`
  cursor: pointer;
  color: blue;
  padding-right: 25px;
`;

const Separator = styled.line`
  stroke: grey;
  stroke-width: 2;
`;

const Line = styled.svg`
  height: 100px;
  width: 10px;
  padding-top: 5px;
`;
