import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import { reducers } from './reducers';

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
export const persisted = persistStore(store);
