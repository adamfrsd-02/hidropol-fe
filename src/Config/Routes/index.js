import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, Controlling } from "../../Pages";

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
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
