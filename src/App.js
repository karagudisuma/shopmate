
import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import {withErrorBoundary} from './ErrorPage';
import { ProtectedRoutes } from './Routes/protectedRoutes';
import { PublicRoutes } from './Routes/publicRoutes';
import Header from './Header';
import  Footer from './Footer';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Fragment>

        <Header.components.Header />
        <Switch>
          <Route path="/" component={PublicRoutes} />
        </Switch>
        <Footer.components.Footer />
      </Fragment>
    );
  }
}

export default withErrorBoundary(App);
