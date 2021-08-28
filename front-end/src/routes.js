import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Apply from "./components/Apply";
import List from "./components/List";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/app">
          <Redirect to={"/app/apply"} />
        </Route>
        <Route exact path="/app/apply">
          <Apply />
        </Route>
        <Route exact path="/app/list">
          <List />
        </Route>
      </Switch>
    );
  }
}

export default Routes;
