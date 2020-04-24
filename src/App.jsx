import React from 'react';
import Layout from './components/Layout';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Layout />
    </div>
  </BrowserRouter>
);

export default App;
