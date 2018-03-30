import React, { Component } from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import "./App.css";
import MicroBlog from "./components/micro-blog/micro-blog";
import Nav from "./components/nav/nav";
import DashBoard from "./components/dashboard/dashboard";

const Main = styled.div`
  display: flex;
`;
class App extends Component {
  render() {
    return (
      <Main>
        <Nav />
        <MicroBlog />
        <DashBoard />
      </Main>
    );
  }
}

export default App;
