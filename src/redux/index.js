import { cardsReduser } from './Books/reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  products: cardsReduser,
});
