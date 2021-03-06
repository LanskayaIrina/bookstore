import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { func } from 'prop-types';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { trackPromise } from 'react-promise-tracker';

import { bookPropTypes } from 'propTypes/books';
import { Button } from 'components/_shared/Button';

import './styles.scss';

export const BookInfo = ({
  getBookById,
  toggleProductToCart,
  toggleFavoriteCard,
  isBookInFavorite,
  isBookInCart,
  book,
}) => {
  const { goBack } = useHistory();
  const { id } = useParams();

  const { title, img, description } = book;

  const onClickFavorite = (e) => {
    e.stopPropagation();
    toggleFavoriteCard(book.id);
  };

  const onClickCart = (e) => {
    e.stopPropagation();
    toggleProductToCart(book.id);
  };

  const onClickBack = () => goBack();

  useEffect(() => {
    if (!book.id) {
      trackPromise(getBookById(id));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="book">
      <button className="go-back" type="button" onClick={onClickBack}>
        <KeyboardBackspaceIcon />
        Back
      </button>
      <div className="book-detail">
        <div className="img-block">
          <img className="img" src={img} alt={title} />
        </div>
        <div className="book-detail-info">
          <h2 className="title">{title}</h2>
          <p className="description">{description}</p>
          <div className="row">
            <Button
              className="favorites"
              onClick={onClickFavorite}
              element={<StarBorderIcon classes={{ root: 'book-bookmark-media' }} color="action" />}
              style={{
                background: isBookInFavorite ? '#fcf815e1' : '',
              }}
            />
            <Button
              className="cart"
              onClick={onClickCart}
              element={<ShoppingBasketIcon classes={{ root: 'book-basket-media' }} />}
              style={{
                background: isBookInCart ? '#fd2e2eb0' : '',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

BookInfo.propTypes = {
  book: bookPropTypes,
  getBookById: func.isRequired,
  toggleFavoriteCard: func.isRequired,
  toggleProductToCart: func.isRequired,
};

BookInfo.defaultProps = {
  book: {},
};
