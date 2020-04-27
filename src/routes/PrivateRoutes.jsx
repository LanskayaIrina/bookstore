import React from 'react';
import { bool } from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import { BooksPage } from '../components/BooksPage';

export const PrivateRoutes = ({ isLogged }) => {
  const Routes = (
    <Switch>
      <Route exact path="/contacts" />
      <Route exact path="/cart" />
      <Route exact path={['/books', '/']} component={BooksPage} />
    </Switch>
  );

  const RedirectToLogin = <Redirect to="/login" />;

  return isLogged ? Routes : RedirectToLogin;
};

PrivateRoutes.propTypes = {
  isLogged: bool.isRequired,
};
