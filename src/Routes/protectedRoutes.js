
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';

export const ProtectedRoutes = (props) => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home.components.Home} />
      </Switch>
    </div>
  )
}