import React from "react";
import { Route, Switch } from "react-router-dom";

import { Auth, Home } from "pages";
import { TaskDetail } from "containers";

function App() {
  return (
    <div className="wrapper">
      <Switch>
        <Route exact path={["/login", "/register"]} children={Auth} />
        <Route path="/" children={Home} />
      </Switch>
      <Route path="/card/:id" component={TaskDetail} />
    </div>
  );
}

export default App;
