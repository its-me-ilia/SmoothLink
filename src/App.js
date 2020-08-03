import React from "react";
import "./App.css";
import Intro from "./components/Intro/Intro";
import NotFound from "./components/404/404";
import { Switch, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => Intro()} />
        <Route exact path="/404" render={() => NotFound()} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
