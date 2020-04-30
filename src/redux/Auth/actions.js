import { AUTH_USER } from './actionTypes';

export const authUser = (isAuthorized) => ({
  type: AUTH_USER,
  payload: { isAuthorized },
});
