import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LayOut from "./views/LayOut";
import FacultyLayOut from "./views/FacultyLayOut";
import LoginPage from "./views/LoginPage";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{ minHeight: "100vh" }}>
          <Switch>
            <Route exact path="/">
              <Redirect to={"/app/login"} />
            </Route>
            <Route path="/app/login">
              <LoginPage />
            </Route>
            <Route path="/app/student">
              <LayOut />
            </Route>
            <Route path="/app/faculty">
              <FacultyLayOut/>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
