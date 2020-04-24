import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { BooksPage } from '../components/BooksPage';

export const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/contacts" />
      <Route exact path="/login" />
      <Route exact path="/cart" />
      <Route exact path="/books-page" component={ BooksPage } />
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
    </Switch>
  );
};
