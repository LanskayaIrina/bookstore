import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  PAGE_INCREMENT,
  CHECK_SHOW_MORE,
  SAVE_TO_FIRST_PAGE,
  SAVE_SEARCH_QUERY_STRING,
  RESET_PAGE,
  FETCH_PRODUCT_BY_ID,
  SAVE_FILTER_PARAM,
  GET_CATEGORIES,
} from './actionTypes';
import { HttpService } from 'services/HttpService';
import { LIMIT_PRODUCTS } from 'constants/index';

const defaultUrl = `products?_limit=${LIMIT_PRODUCTS}`;

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN,
});

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products },
});

export const getBookById = (id) => {
  return (dispatch) => {
    dispatch(fetchProductsBegin());

    return HttpService.get(`products/${id}`).then((product) => {
      dispatch({ type: FETCH_PRODUCT_BY_ID, payload: { product } });
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

export const entryFilterParam = (param) => (dispatch) => {
  dispatch({
    type: SAVE_FILTER_PARAM,
    payload: { param },
  });
};

export const entrySearchQueryString = (queryString) => (dispatch) =>
  dispatch({
    type: SAVE_SEARCH_QUERY_STRING,
    payload: { queryString },
  });

export const getCategories = () => (dispatch) => {
  HttpService.get('categories').then((categories) => {
    dispatch({
      type: GET_CATEGORIES,
      payload: { categories },
    });
  });
};

export const urlBuilder = (
  options = {
    page: 1,
  }
) => {
  /**
   *  @param {object} options
   *  @param {string} options.string your handmade query-string
   *  @param {string} options.single if you want get single product
   *
   *  You can write query key as a options key, and param
   *  as a key value it`s like title_like: 'bla-bla' or id: 2
   */
  const { page } = options;

  const queryKey = Object.keys(options);

  const createdQueryString = queryKey.reduce((newQueryString, key) => {
    // * create extra query string
    const optionsValue = options[key];
    const queryParamIsArray = typeof optionsValue === 'object';

    if (queryParamIsArray) {
      const concatQueryParam = optionsValue.reduce((concatParam, param) => {
        return (concatParam += `&${key}=${param}`);
      }, '');

      return (newQueryString += concatQueryParam);
    } else if (key === 'string') {
      return (newQueryString += options[key]);
    } else if (key === 'single') {
      return (newQueryString += `${options[key]}`);
    } else if (!optionsValue) {
      return (newQueryString += '');
    }

    return (newQueryString += `&${key}=${options[key]}`);
  }, '');

  return (dispatch) => {
    dispatch(fetchProductsBegin());

    return HttpService.get(`${defaultUrl}${createdQueryString}`).then((products) => {
      if (page === 1) {
        dispatch({
          type: RESET_PAGE,
        });
        dispatch({
          type: SAVE_TO_FIRST_PAGE,
          payload: { products },
        });
      } else {
        dispatch({
          type: FETCH_PRODUCTS_SUCCESS,
          payload: { products },
        });
      }
    });
  };
};
