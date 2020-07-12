import React from "react";

import { connect } from "react-redux";

import { LoggedIn, LoggedOut, Layout } from "components";

const App = ({ isAuthenticated }) => {
  return isAuthenticated ? <LoggedIn /> : <LoggedOut />;
};

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: auth.isAuthenticated,
  authAttempted: auth.authAttempted,
});

export default connect(mapStateToProps)(App);
