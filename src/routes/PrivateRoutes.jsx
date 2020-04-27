import React from 'react';
import { bool } from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import { BooksPage } from './Books';

export const PrivateRoutes = ({ isLogged }) => {
  const Routes = (
    <Switch>
      <Route path="/contacts" />
      <Route path="/cart" />
      <Route exact path="/books" component={BooksPage} />
    </Switch>
  );

  const RedirectToLogin = <Redirect to="/login" />;

  return isLogged ? Routes : RedirectToLogin;
};

PrivateRoutes.propTypes = {
  isLogged: bool,
};

PrivateRoutes.defaultProps = {
  isLogged: false,
};
