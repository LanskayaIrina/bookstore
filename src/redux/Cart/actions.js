import {
  TOGGLE_PRODUCT_TO_CART,
  CLEAR_CART,
  GET_PRODUCTS_FOR_CART,
  CLEAR_LIST_PRODUCTS,
  SET_INITIAL_ORDERING_PRODUCTS,
  REMOVE_ORDER_OF_ORDERING_LIST,
  UPDATE_ORDERING_PRODUCTS,
} from './actionsTypes';
import { HttpService } from 'services/HttpService';

export const toggleProductToCart = (id) => (dispatch) => {
  dispatch({
    type: TOGGLE_PRODUCT_TO_CART,
    payload: { id },
  });
};

export const orderProducts = (orderList) => (dispatch) => {
  HttpService.post('products', orderList).then(() => {
    dispatch({
      type: CLEAR_CART,
    });
  });
};

export const getProductsForCart = (listId) => (dispatch) => {
  const urlRequest = listId.reduce((acc, item) => acc + `id=${item}&`, 'products?');

  HttpService.get(`${urlRequest}`).then((products) => {
    dispatch({
      type: GET_PRODUCTS_FOR_CART,
      payload: { products },
    });
  });
};

export const clearListProducts = () => (dispatch) => {
  dispatch({
    type: CLEAR_LIST_PRODUCTS,
  });
};

export const setInitialOrderingProducts = (listProductsId, orderingListProducts) => (dispatch) => {
  const orderList = listProductsId.map(
    (id) => orderingListProducts.find((order) => order.id === id) || { id, count: 1 }
  );

  dispatch({
    type: SET_INITIAL_ORDERING_PRODUCTS,
    payload: { orderList },
  });
};

export const removeOrderOfOrderingList = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_ORDER_OF_ORDERING_LIST,
    payload: { id },
  });
};

export const updateOrderingProducts = (id, value, orderingProducts) => (dispatch) => {
  const updatedOrderingList = orderingProducts.map((order) => {
    return order?.id === id
      ? {
          id,
          count: order.count + value,
        }
      : order;
  });
  dispatch({
    type: UPDATE_ORDERING_PRODUCTS,
    payload: { updatedOrderingList },
  });
};
