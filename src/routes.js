// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
import React from "react";
import HomePage from "./pages/HomePage";
import { Route, Switch } from "react-router-dom";

export default (
  <Switch>
    {/* this is used for reloading pages*/}
    <Route exact path="/" component={HomePage} />
  </Switch>
);
