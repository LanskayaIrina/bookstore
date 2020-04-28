import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from 'routes';
import { ErrorBoundary } from 'components/Layout/ErrorBoundary';
import { Layout } from 'components/Layout';

export const App = () => (
  <BrowserRouter>
    <ErrorBoundary>
      <Layout>
        <AppRouter />
      </Layout>
    </ErrorBoundary>
  </BrowserRouter>
);
