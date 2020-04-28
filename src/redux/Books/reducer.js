import { FETCH_PRODUCTS_BEGIN, FETCH_PRODUCTS_SUCCESS } from './actionTypes';

const initialState = {
  list: [],
  isFetching: false,
};

export const cardsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        list: payload.products,
        isFetching: false,
      };
    case FETCH_PRODUCTS_BEGIN:
      return {
        ...state,
        isFetching: true,
      };
    default:
      return state;
  }
};
