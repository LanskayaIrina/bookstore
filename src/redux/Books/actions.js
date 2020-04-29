import { FETCH_PRODUCTS_BEGIN, FETCH_PRODUCTS_SUCCESS, PAGE_INCREMENT, CHECK_SHOW_MORE } from './actionTypes';
import { HttpService } from 'services/HttpService';
import { LIMIT_PRODUCTS } from 'constants/index';

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN,
});

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products },
});

export const getCards = (page = 1) => {
  return (dispatch) => {
    dispatch(fetchProductsBegin());

    return HttpService.get(`products?_page=${page}&_limit=${LIMIT_PRODUCTS}`).then((products) => {
      dispatch(fetchProductsSuccess(products));
    });
  };
};

export const checkShowMore = (products) => (dispatch) => {
  products.length % LIMIT_PRODUCTS > 0
    ? dispatch({
        type: CHECK_SHOW_MORE,
        payload: { showMore: false },
      })
    : dispatch({
        type: CHECK_SHOW_MORE,
        payload: { showMore: true },
      });
};

export const pageIncrement = () => (dispatch) => {
  dispatch({
    type: PAGE_INCREMENT,
  });
};
