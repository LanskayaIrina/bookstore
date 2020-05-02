import { TOGGLE_FAVORITES_PRODUCT } from './actionsTypes';

const initialState = {
  products: [],
};

export const favoritesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TOGGLE_FAVORITES_PRODUCT: {
      const { products } = state;
      const productInFavorites = products.find((productId) => productId === payload.id);

      if (!isNaN(productInFavorites)) {
        return {
          ...state,
          products: products.filter((id) => id !== payload.id),
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
