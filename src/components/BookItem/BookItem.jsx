import React from 'react';
import { Link } from 'react-router-dom';
import { number, func, arrayOf } from 'prop-types';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import { bookPropTypes } from 'propTypes/books';
import { Button } from 'components/_shared/Button';

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
          <img className="img" src={img} alt={title} />
        </div>
        <div className="card-title-container">
          <h2 className="card-title">{title}</h2>
        </div>
        <div className="card-content">
          <div className="book-desc">{description}</div>
          <div className="book-about">
            <Button
              className="favorites"
              onClick={addToFavorite}
              element={<StarBorderIcon color="action" />}
              style={{
                background: isBookInFavorite ? '#fcf815e1' : '',
              }}
            />
            <Button
              className="cart"
              onClick={addToCart}
              element={<ShoppingBasketIcon color="action" />}
              style={{
                background: isBookInCart ? '#fd2e2eb0' : '',
              }}
            />
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
