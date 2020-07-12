import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";

import LoginForm from "pages/Login";
import RegisterForm from "pages/Register";

const LoggedOut = () => {
  return (
    <Switch>
      <Route path="/login" component={LoginForm} />
      <Route path="/register" component={RegisterForm} />
      <Redirect to="/login" />
    </Switch>
  );
};

export default LoggedOut;
