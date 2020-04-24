import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Layout } from './components/Layout';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Layout />
    </div>
  </BrowserRouter>
);

export default App;
