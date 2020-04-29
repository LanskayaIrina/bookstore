import { TOGGLE_PRODUCT_TO_CART } from './actionsTypes';

const initialState = {
  products: [],
};

export const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TOGGLE_PRODUCT_TO_CART: {
      const { products } = state;
      const productInBasket = products.find((productId) => productId === payload.id);

      if (productInBasket) {
        return {
          ...state,
          products: products.filter((productId) => productId !== payload.id),
        };
      }

      return {
        ...state,
        products: [...products, payload.id],
      };
    }
    default:
      return state;
  }
};
