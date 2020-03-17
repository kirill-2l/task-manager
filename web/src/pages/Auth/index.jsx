import React from "react";
import "./Auth.scss";
import { LoginForm, RegisterForm } from "modules";
import { Route } from "react-router-dom";

const Auth = () => (
  <section className="auth">
    <Route exact path={["/", "/login"]} component={LoginForm} />
    <Route exact path="/register" component={RegisterForm} />
  </section>
);

export default Auth;
