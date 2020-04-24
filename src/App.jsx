import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routs';

import { Layout } from './components/Layout';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Layout>
        <AppRouter />
      </Layout>
    </div>
  </BrowserRouter>
);

export default App;
