import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from './components/Layout/ErrorBoundary/ErrorBoundary';
import { AppRouter } from './routes';

import { Layout } from './components/Layout';

export const App = () => (
  <BrowserRouter>
    <ErrorBoundary>
      <Layout>
        <AppRouter />
      </Layout>
    </ErrorBoundary>
  </BrowserRouter>
);
