import React, { Fragment } from "react";
import "./Home.scss";
// import { Route } from "react-router-dom";
import { Header, Column, Task, Board } from "components";

const Home = () => (
  <Fragment>
    <Header />
    <Board>
      <Column>
        <Task />
      </Column>
      <Column>
        <Task />
      </Column>
      <Column>
        <Task />
      </Column>
      <Column>
        <Task />
      </Column>
      <Column>
        <Task />
      </Column>
      <Column>
        <Task />
      </Column>
      <Column>
        <Task />
      </Column>
      <Column>
        <Task />
      </Column>
      <Column>
        <Task />
      </Column>
      <Column>
        <Task />
      </Column>
    </Board>
  </Fragment>
);

export default Home;
