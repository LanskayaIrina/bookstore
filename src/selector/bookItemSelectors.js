import { createSelector } from 'reselect';
import { getBookIdParam } from 'utils/history';

const productsSelector = (state) => state.products.list;
const productIdSelector = (state, props) => Number(props.match.params.id);

export const getProductFromState = createSelector(productsSelector, productIdSelector, (products, id) =>
  products.find((product) => product.id === id)
);

export const getIsBookInCart = (state, props) =>
  state.cart.products.find((product) => product === props?.book?.id || getBookIdParam(props));

export const getIsFavoriteBook = (state, props) =>
  state.favorites.products.find((product) => product === props?.book?.id || getBookIdParam(props));
