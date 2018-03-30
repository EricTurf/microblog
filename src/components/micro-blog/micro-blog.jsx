import React, { Component, Fragment } from "react";
import PostList from "./post-list/post-list";
import SearchBar from "./search-bar/search-bar";
import styled from "styled-components";

const Main = styled.div``;
class MicroBlog extends Component {
  render() {
    return (
      <Main>
        <SearchBar />
        <PostList />
      </Main>
    );
  }
}

export default MicroBlog;
