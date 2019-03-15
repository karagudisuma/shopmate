import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from '../Home';
import Dashboard from '../Dashboard';

// RouteBased CodeSplitting.
export const PublicRoutes = props => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home.components.Home} />
        <Route exact path="/dashboard/:section" component={Dashboard.containers.Dashboard} />
        <Route component={Home.components.Home} />
      </Switch>
    </React.Fragment>
  );
};
