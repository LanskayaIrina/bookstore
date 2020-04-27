import { GET_CARDS } from './actionTypes';
import { HttpService } from '../../services/HttpService';

export const getCards = () => (dispatch) => {
  HttpService.get('products').then((res) => dispatch({ type: GET_CARDS, payload: { products: res } }));
};
