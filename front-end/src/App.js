import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./views/LoginPage";
import SideBar from "./components/SideBar";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{ minHeight: "100vh" }}>
          <Switch>
            <Route path="/">
              <SideBar />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
