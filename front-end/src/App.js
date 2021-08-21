import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./views/LoginPage";
import LayOut from "./components/LayOut";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{ minHeight: "100vh" }}>
          <Switch>
            <Route path="/" render={props=><LayOut {...props}/>}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
