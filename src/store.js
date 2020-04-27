import { createStore, applyMiddleware } from 'redux';
import reduser from './redux/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const store = createStore(reduser, composeWithDevTools(applyMiddleware(thunk)));
