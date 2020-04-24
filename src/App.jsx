import React from 'react';
import Layout from './components/Layout';
import { BrowserRouter } from 'react-router-dom';

import 'normalize.css';
import './general.scss';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Layout />
    </div>
  </BrowserRouter>
);

export default App;
