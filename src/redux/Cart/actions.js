import { TOGGLE_PRODUCT_TO_CART } from './actionsTypes';

export const toggleProductToCart = (id) => (dispatch) => {
  dispatch({
    type: TOGGLE_PRODUCT_TO_CART,
    payload: { id },
  });
};
