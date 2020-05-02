import { createSelector } from 'reselect';
import { getBookIdParam } from 'utils/history';

const productsSelector = (state) => state.products.list;
const productIdSelector = (state, props) => Number(props.match.params.id);

export const getProductFromState = createSelector(productsSelector, productIdSelector, (products, id) =>
  products.find((product) => product.id === id)
);

export const getIsBookInCart = (state, props) =>
  !isNaN(state.cart.productsListId.find((product) => product === (props?.book?.id || getBookIdParam(props))));

export const getIsFavoriteBook = (state, props) =>
  !isNaN(state.favorites.products.find((product) => product === (props?.book?.id || getBookIdParam(props))));

export const hasSearchResult = (state) => state.products.list.length > 0;

export const getQueryString = (state) => state.products.searchQueryString;
