import React from 'react';
import { bool } from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import { PrivateRoutes } from './PrivateRoutes';
import { BooksPage } from '../components/BooksPage';
import { LogIn } from './LogIn';

export const AppRouter = ({ isLogged }) => {
  return (
    <Switch>
      <Route exact path="/" component={BooksPage} />
      <Route exact path="/login" component={LogIn}/>
      <PrivateRoutes isLogged={isLogged} />
    </Switch>
  );
}

AppRouter.propTypes = {
  isLogged: bool,
};
