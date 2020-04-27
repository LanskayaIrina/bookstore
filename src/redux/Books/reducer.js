import { GET_CARDS } from './actionTypes';

const initialState = {
  cards: [],
  isFetching: true,
};

export const cardsReduser = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS:
      return {
        ...state,
        cards: action.payload.products,
        isFetching: false,
      };
    default:
      return state;
  }
};
