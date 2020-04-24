import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/contacts" />
      <Route exact path="/login" />
      <Route exact path="/cart" />
      <Route exact path="/books" />
      <Route exact path="/">
        <Redirect to="/login"/>
      </Route>
    </Switch>
  );
};

export default AppRouter;
