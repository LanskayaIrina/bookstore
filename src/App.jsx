import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from 'routes';
import { ErrorBoundary } from 'components/Layout/ErrorBoundary';
import { Layout } from 'components/Layout';
import { Spinner } from 'components/Spinner/Spinner';

export const App = () => (
  <BrowserRouter>
    <ErrorBoundary>
      <Layout>
        <AppRouter />
        <Spinner />
      </Layout>
    </ErrorBoundary>
  </BrowserRouter>
);
