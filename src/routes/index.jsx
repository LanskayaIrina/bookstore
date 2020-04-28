import React from 'react';
import { bool } from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import { BASE_URL, LOGIN } from 'constants/pathNames';
import { PrivateRoutes } from './PrivateRoutes';
import { LogIn } from './LogIn';

export const AppRouter = ({ isLogged }) => {
  return (
    <Switch>
      <Route exact path={BASE_URL}>
        <Redirect to={LOGIN} />
      </Route>
      <Route path={LOGIN} component={LogIn} />
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
