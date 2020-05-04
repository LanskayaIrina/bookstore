import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  PAGE_INCREMENT,
  CHECK_SHOW_MORE,
  SAVE_FILTER_PARAM,
  SAVE_TO_FIRST_PAGE,
  SAVE_SEARCH_QUERY_STRING,
  RESET_PAGE,
  FETCH_PRODUCT_BY_ID,
  GET_CATEGORIES,
} from './actionTypes';

const initialState = {
  list: [],
  isFetching: false,
  product: null,
  page: 1,
  showMore: true,
  filterParam: [],
  searchQueryString: '',
  categories: [],
};

export const cardsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        list: [...state.list, ...payload.products],
      };
    case FETCH_PRODUCTS_BEGIN:
      return {
        ...state,
      };
    case FETCH_PRODUCT_BY_ID:
      return {
        ...state,
        product: payload.product,
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
    case SAVE_FILTER_PARAM:
      return {
        ...state,
        filterParam: [...payload.param],
      };
    case SAVE_TO_FIRST_PAGE:
      return {
        ...state,
        list: [...payload.products],
      };
    case SAVE_SEARCH_QUERY_STRING:
      return {
        ...state,
        searchQueryString: action.payload.queryString,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: [...payload.categories],
      };
    default:
      return state;
  }
};
