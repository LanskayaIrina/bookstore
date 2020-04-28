import { combineReducers } from 'redux';

import { cardsReducer } from './Books/reducer';

export const reducers = combineReducers({
  products: cardsReducer,
});
