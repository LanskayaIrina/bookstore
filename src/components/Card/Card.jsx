import React from 'react';
import { Link } from 'react-router-dom';
import { string, number, shape } from 'prop-types';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import './styles.scss';

export const Card = ({ card }) => {
  const { title, description, img } = card;

  const addToFavorite = (e) => {
    e.preventDefault();
  };

  const addToCart = (e) => {
    e.preventDefault();
  };

  return (
    <Link key={card.id} to={`books/${card.id}`}>
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
            <button className="card-action" onClick={addToFavorite}>
              <StarBorderIcon color="action" />
            </button>
            <button className="card-action" onClick={addToCart}>
              <ShoppingBasketIcon color="action" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  card: shape({
    title: string.isRequired,
    price: number.isRequired,
    description: string.isRequired,
    img: string.isRequired,
    category: string.isRequired,
  }).isRequired,
};
