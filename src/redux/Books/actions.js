import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  PAGE_INCREMENT,
  CHECK_SHOW_MORE,
  SEARCH_RESULT,
  ENTRY_QUERY_STRING,
  RESET_PAGE,
  FETCH_PRODUCT_BY_ID,
  FILTERED_CATEGORY,
  SAVE_FILTER_STRING,
  GET_CATEGORIES,
} from './actionTypes';
import { HttpService } from 'services/HttpService';
import { LIMIT_PRODUCTS } from 'constants/index';

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN,
});

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products },
});

export const getProducts = (page = 1) => {
  return (dispatch) => {
    dispatch(fetchProductsBegin());

    return HttpService.get(`products?_page=${page}&_limit=${LIMIT_PRODUCTS}`).then((products) => {
      dispatch(fetchProductsSuccess(products));
    });
  };
};

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

export const entryFilterString = (string) => (dispatch) => {
  dispatch({
    type: SAVE_FILTER_STRING,
    payload: { string },
  });
};

export const filterCategory = (categoriesArray, page = 1, extraString) => {
  const createdFilterQueryString = categoriesArray.reduce((queryString, category) => {
    return queryString + `&category=${category}`;
  }, '');

  const createdQueryString = `${createdFilterQueryString}${extraString ? '&title_like=' + extraString : ''}`;

  return (dispatch) => {
    dispatch(fetchProductsBegin());

    return HttpService.get(`products?_page=${page}&_limit=${LIMIT_PRODUCTS}${createdQueryString}`).then((products) => {
      dispatch(entryFilterString(createdFilterQueryString));
      if (page > 1) {
        dispatch({
          type: FETCH_PRODUCTS_SUCCESS,
          payload: { products },
        });
      } else {
        dispatch({
          type: RESET_PAGE,
        });

        dispatch({
          type: FILTERED_CATEGORY,
          payload: { products },
        });
      }
    });
  };
};

export const entryQuerystring = (queryString) => (dispatch) =>
  dispatch({
    type: ENTRY_QUERY_STRING,
    payload: { queryString },
  });

export const searchProducts = (queryString, page = 1) => {
  return (dispatch) => {
    dispatch(fetchProductsBegin());
    return HttpService.get(`products?_page=${page}&_limit=${LIMIT_PRODUCTS}&title_like=${queryString}`).then(
      (products) => {
        if (page > 1) {
          dispatch({
            type: FETCH_PRODUCTS_SUCCESS,
            payload: { products },
          });
        } else {
          dispatch({ type: RESET_PAGE });
          dispatch({
            type: SEARCH_RESULT,
            payload: { products },
          });
        }
      }
    );
  };
};

export const getCategories = () => (dispatch) => {
  HttpService.get('categories').then((categories) => {
    dispatch({
      type: GET_CATEGORIES,
      payload: { categories },
    });
  });
};
