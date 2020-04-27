import React from 'react';
import { bool } from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import { BooksPage } from '../components/BooksPage';
import { LogIn } from './LogIn';

export const AppRouter = ({ isLogged }) => {
  const routs = (
    <Switch>
      <Route exact path="/contacts" />
      <Route exact path="/cart" />
      <Route exact path={['/books', '/']} component={BooksPage} />
    </Switch>
  );
  const userNotLogged = (
    <Switch>
      <Route path="/login" component={LogIn} />
      <Redirect to="/login" />
    </Switch>
  );
  return isLogged ? routs : userNotLogged;
};

AppRouter.propTypes = {
  isLogged: bool.isRequired,
};
