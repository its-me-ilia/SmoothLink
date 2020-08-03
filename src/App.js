import React from "react";
import "./App.css";
import Intro from "./components/Intro/Intro";
import NotFound from "./components/404/404";
import { Switch, Route, HashRouter } from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => Intro()} />
        <Route exact path="/404" render={() => NotFound()} />
      </Switch>
    </HashRouter>
  );
};

export default App;
