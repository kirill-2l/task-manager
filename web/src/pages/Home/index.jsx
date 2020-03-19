import React, { Fragment } from "react";
import "./Home.scss";

import { Header } from "components";
import { Board } from "containers";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Board />
    </Fragment>
  );
};

export default Home;
