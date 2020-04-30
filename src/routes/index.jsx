import React from 'react';
import { bool } from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import { BASE_URL, LOGIN } from 'constants/pathNames';
import PrivateRoutes from './PrivateRoutes/index';
import LogIn from './LogIn/index';

export const AppRouter = () => {
  return (
    <Switch>
      <Route exact path={BASE_URL}>
        <Redirect to={LOGIN} />
      </Route>
      <Route path={LOGIN} component={LogIn} />
      <PrivateRoutes />
    </Switch>
  );
};

AppRouter.propTypes = {
  isLogged: bool,
};

AppRouter.defaultProps = {
  isLogged: false,
};
