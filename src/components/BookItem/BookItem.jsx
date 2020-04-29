import React from 'react';
import { Link } from 'react-router-dom';
import { string, number, shape, func, arrayOf } from 'prop-types';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import { bookPropTypes } from 'propTypes/books';

import './styles.scss';

export const BookItem = ({ book, toggleProductToCart, toggleFavoriteCard, isBookInCart, isBookInFavorite }) => {
  const { title, description, img, id } = book;

  const addToFavorite = (e) => {
    e.preventDefault();
    toggleFavoriteCard(id);
  };

  const addToCart = (e) => {
    e.preventDefault();
    toggleProductToCart(id);
  };

  return (
    <Link key={id} to={`books/${id}`}>
      <div className="card">
        <div className="img-block">
          <img className="img" src={img} alt="book" />
        </div>
        <div className="card-title-container">
          <h2 className="card-title">{title}</h2>
        </div>
        <div className="card-content">
          <div className="book-desc">{description}</div>
          <div className="book-about">
            <button
              className="card-action"
              onClick={addToFavorite}
              style={{
                background: isBookInFavorite ? 'yellow' : '',
              }}
            >
              <StarBorderIcon color="action" />
            </button>
            <button
              className="card-action"
              onClick={addToCart}
              style={{
                background: isBookInCart ? 'red' : '',
              }}
            >
              <ShoppingBasketIcon color="action" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

BookItem.propTypes = {
  book: bookPropTypes.isRequired,
  toggleFavoriteCard: func.isRequired,
  toggleProductToCart: func.isRequired,
  cart: arrayOf(number),
  favorites: arrayOf(number),
};

BookItem.defaultProps = {
  cart: [],
  favorites: [],
};
