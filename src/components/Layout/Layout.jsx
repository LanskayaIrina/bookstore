import React, { useState } from 'react';
import { createBrowserHistory } from 'history';

import Container from '@material-ui/core/Container';

import { Router } from 'react-router-dom';
import { Header } from '../Header';

const history = createBrowserHistory();
export const Layout = () => {
  const [isLogged, toggleLoggingState] = useState(false);

  return (
    <Router history={history}>
      <Container maxWidth="lg">
        <Header isLogged={isLogged} toggleLoggingState={toggleLoggingState} />
      </Container>
    </Router>
  );
};
