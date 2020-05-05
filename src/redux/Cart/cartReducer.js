import {
  TOGGLE_PRODUCT_TO_CART,
  CLEAR_CART,
  GET_PRODUCTS_FOR_CART,
  CLEAR_LIST_PRODUCTS,
  SET_INITIAL_ORDERING_PRODUCTS,
  REMOVE_ORDER_OF_ORDERING_LIST,
  UPDATE_ORDERING_PRODUCTS,
} from './actionsTypes';

const initialState = {
  productsListId: [],
  productsList: [],
  orderingProducts: [],
};

export const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TOGGLE_PRODUCT_TO_CART: {
      const { productsListId } = state;
      const productInBasket = productsListId.find((productId) => productId === payload.id);
      if (!isNaN(productInBasket)) {
        return {
          ...state,
          productsListId: productsListId.filter((productId) => productId !== payload.id),
        };
      }

      return {
        ...state,
        productsListId: [...productsListId, payload.id],
      };
    }
    case CLEAR_CART:
      return {
        ...state,
        productsListId: [],
        productsList: [],
        orderingProducts: [],
      };
    case CLEAR_LIST_PRODUCTS:
      return {
        ...state,
        productsList: [],
      };
    case GET_PRODUCTS_FOR_CART:
      return {
        ...state,
        productsList: payload.products,
      };
    case SET_INITIAL_ORDERING_PRODUCTS:
      return {
        ...state,
        orderingProducts: payload.orderList,
      };
    case REMOVE_ORDER_OF_ORDERING_LIST: {
      const newOrderingList = state.orderingProducts.filter((order) => order.id !== payload.id);
      return {
        ...state,
        orderingProducts: newOrderingList,
      };
    }
    case UPDATE_ORDERING_PRODUCTS:
      return {
        ...state,
        orderingProducts: payload.updatedOrderingList,
      };
    default:
      return state;
  }
};
