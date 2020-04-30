import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  PAGE_INCREMENT,
  CHECK_SHOW_MORE,
  SEARCH_RESULT,
  ENTRY_QUERY_STRING,
  RESET_PAGE,
  FETCH_PRODUCT_BY_ID,
} from './actionTypes';

const initialState = {
  list: [],
  isFetching: false,
  product: {},
  page: 1,
  showMore: true,
  searchQueryString: '',
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
    case RESET_PAGE:
      return {
        ...state,
        page: 2,
      };
    case CHECK_SHOW_MORE:
      return {
        ...state,
        showMore: payload.showMore,
      };
    case SEARCH_RESULT:
      return {
        ...state,
        list: [...payload.products],
        isFetching: false,
      };
    case ENTRY_QUERY_STRING:
      return {
        ...state,
        searchQueryString: action.payload.queryString,
      };
    default:
      return state;
  }
};
