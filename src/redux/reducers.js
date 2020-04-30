import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import { authReducer } from './Auth/reducer';
import { cardsReducer } from './Books/reducer';
import { cartReducer } from './Cart/cartReducer';
import { favoritesReducer } from './Favorites/favoritesReducer';

const favoritesPersistConfig = {
  key: 'favorites',
  storage,
};

const cartPersistConfig = {
  key: 'cart',
  storage,
};

const authPersistConfig = {
  key: 'auth',
  storage,
};

export const reducers = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  products: cardsReducer,
  cart: persistReducer(cartPersistConfig, cartReducer),
  favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
});
