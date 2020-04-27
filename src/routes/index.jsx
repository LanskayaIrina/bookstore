import React from 'react';
import { bool } from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import { PrivateRoutes } from './PrivateRoutes';
import { LogIn } from './LogIn';

export const AppRouter = ({ isLogged }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={LogIn} />
      <PrivateRoutes isLogged={isLogged} />
    </Switch>
  );
};

AppRouter.propTypes = {
  isLogged: bool,
};

AppRouter.defaultProps = {
  isLogged: false,
};
