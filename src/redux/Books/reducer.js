import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCT_BY_ID,
  PAGE_INCREMENT,
  CHECK_SHOW_MORE,
} from './actionTypes';

const initialState = {
  list: [],
  isFetching: false,
  product: {},
  page: 1,
  showMore: true,
};

export const cardsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        list: [...state.list, ...payload.products],
        isFetching: false,
      };
    case FETCH_PRODUCTS_BEGIN:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_PRODUCT_BY_ID:
      return {
        ...state,
        product: payload.product,
        isFetching: false,
      };
    case PAGE_INCREMENT:
      return {
        ...state,
        page: state.page + 1,
      };
    case CHECK_SHOW_MORE:
      return {
        ...state,
        showMore: payload.showMore,
      };
    default:
      return state;
  }
};
