import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from '../Home';

// RouteBased CodeSplitting.
export const PublicRoutes = props => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home.components.Home} />
        <Route component={Home.components.Home} />
      </Switch>
    </React.Fragment>
  );
};
