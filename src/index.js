import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persisted } from './redux';

import { App } from './App';

import './general.scss';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persisted}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
