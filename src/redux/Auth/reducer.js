import { AUTH_USER } from './actionTypes';

const initialState = {
  isAuthorized: false,
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case AUTH_USER:
      return {
        ...state,
        isAuthorized: payload.isAuthorized,
      };
    default:
      return state;
  }
};
