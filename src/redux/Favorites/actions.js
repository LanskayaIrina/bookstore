import { TOGGLE_FAVORITES_PRODUCT } from './actionsTypes';

export const toggleFavoriteCard = (id) => (dispatch) => {
  dispatch({
    type: TOGGLE_FAVORITES_PRODUCT,
    payload: { id },
  });
};
