import { useState, StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Datum from "./Datum";
import ThemeContext from "./ThemeContext";

const App = () => {
  const theme = useState("darkblue");
  return (
    <ThemeContext.Provider value={theme}>
     <div>
        <Router>
          <header className="w-full mb-10 bg-gradient-to-b text-center p-7 from-purple-400 via-pink-500 to-red-500">
            <Link className="text-6xl text-white hover:text-gray-200" to="/">
              Bonafide!
            </Link>
          </header>
          <Switch>
            <Route path="/">
              <Datum />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
