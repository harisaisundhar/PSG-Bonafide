import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LayOut from "./views/LayOut";


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{ minHeight: "100vh" }}>
          <Switch>
            <Route path="/">
              <LayOut />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
