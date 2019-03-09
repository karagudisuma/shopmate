
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import {withErrorBoundary} from './ErrorPage';
import { ProtectedRoutes } from './Routes/protectedRoutes';
import { PublicRoutes } from './Routes/publicRoutes';
import './App.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="content-container">
        
        <Switch>
          <Route path="/" component={PublicRoutes} />
        </Switch>
      </div>
    );
  }
}

export default withErrorBoundary(App);
