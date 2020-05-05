const { FETCH_PRODUCT_BY_ID } = require('../../redux/Books/actionTypes');
const { TOGGLE_PRODUCT_TO_CART } = require('../../redux/Cart/actionsTypes');
const { TOGGLE_FAVORITES_PRODUCT } = require('../../redux/Favorites/actionsTypes');
const { cardsReducer } = require('../../redux/Books/reducer');
const { cartReducer } = require('../../redux/Cart/cartReducer');
const { favoritesReducer } = require('../../redux/Favorites/favoritesReducer');

const product = {
  id: 0,
  title: 'Amuck Politics Sip',
  price: 550,
  description: 'Some description',
  img: 'https://unsplash.it/1280/720?image=790',
  category: 'History',
};

const id = 1;

describe('Reducer (detailed view): ', () => {
  describe('Handle FETCH_PRODUCT_BY_ID: ', () => {
    test('Should return product by it`s id', () => {
      const state = {};

      const action = {
        type: FETCH_PRODUCT_BY_ID,
        payload: { product },
      };

      expect(cardsReducer(state, action)).toEqual({ product });
    });

    test('Should replace product in state', () => {
      const state = {
        product: {
          id: 1,
          title: 'Unique Contract Suffer',
          price: 106,
          description: 'Lorem ipsum dolor sit amet',
          img: 'https://unsplash.it/1280/720?image=432',
          category: 'Humor',
        },
      };

      const action = {
        type: FETCH_PRODUCT_BY_ID,
        payload: { product },
      };

      expect(cardsReducer(state, action)).toEqual({ product });
    });
  });

  describe('Handle TOGGLE_PRODUCT_TO_CART: ', () => {
    test('Should remove product from cart', () => {
      const state = {
        productsListId: [id],
      };

      const action = {
        type: TOGGLE_PRODUCT_TO_CART,
        payload: { id },
      };

      expect(cartReducer(state, action)).toEqual({ productsListId: [] });
    });

    test('Should add product to cart', () => {
      const state = {
        productsListId: [],
      };

      const action = {
        type: TOGGLE_PRODUCT_TO_CART,
        payload: { id },
      };

      expect(cartReducer(state, action)).toEqual({ productsListId: [id] });
    });
  });

  describe('Handle TOGGLE_FAVORITES_PRODUCT: ', () => {
    test('Should remove product from favorites', () => {
      const state = {
        products: [id],
      };

      const action = {
        type: TOGGLE_FAVORITES_PRODUCT,
        payload: { id },
      };

      expect(favoritesReducer(state, action)).toEqual({ products: [] });
    });

    test('Should add product to favorites', () => {
      const state = {
        products: [],
      };

      const action = {
        type: TOGGLE_FAVORITES_PRODUCT,
        payload: { id },
      };

      expect(favoritesReducer(state, action)).toEqual({ products: [id] });
    });
  });
});
