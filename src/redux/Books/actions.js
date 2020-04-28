import { FETCH_PRODUCTS_BEGIN, FETCH_PRODUCTS_SUCCESS } from './actionTypes';
import { HttpService } from '../../services/HttpService';

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN,
});

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products },
});

export const getCards = () => {
  return (dispatch) => {
    dispatch(fetchProductsBegin());

    return HttpService.get('products?_limit=25').then((products) => dispatch(fetchProductsSuccess(products)));
  };
};
