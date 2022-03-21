import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, Controlling, About } from "../../Pages";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/controlling">
          <Controlling />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
