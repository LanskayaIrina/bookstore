import React from 'react';
import { bool } from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import { BOOK, BOOKS, CART, CONTACTS, LOGIN } from 'constants/pathNames';
import Cart from '../Cart';
import Books from '../Books';
import BookInfo from 'routes/BookInfo';

export const PrivateRoutes = ({ isAuthorized }) => {
  const Routes = (
    <Switch>
      <Route path={CONTACTS} />
      <Route path={CART} component={Cart} />
      <Route exact path={BOOKS} component={Books} />
      <Route path={BOOK} component={BookInfo} />
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
