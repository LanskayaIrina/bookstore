import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes';

import { Layout } from './components/Layout';

export const App = () => (
  <BrowserRouter>
    <Layout>
      <AppRouter />
    </Layout>
  </BrowserRouter>
);
