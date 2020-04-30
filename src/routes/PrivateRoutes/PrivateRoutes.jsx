import React from 'react';
import { bool } from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import Books from '../Books';
import { BOOK, BOOKS, CART, CONTACTS, LOGIN } from 'constants/pathNames';
import { FullCard } from 'components/FullCard';

export const PrivateRoutes = ({ isAuthorized }) => {
  const Routes = (
    <Switch>
      <Route path={CONTACTS} />
      <Route path={CART} />
      <Route exact path={BOOKS} component={Books} />
      <Route path={BOOK} component={FullCard} />
    </Switch>
  );

  const RedirectToLogin = <Redirect to={LOGIN} />;

  return isAuthorized ? Routes : RedirectToLogin;
};

PrivateRoutes.propTypes = {
  isLogged: bool,
};

PrivateRoutes.defaultProps = {
  isLogged: false,
};
