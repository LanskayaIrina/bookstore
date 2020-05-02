import React, { useState } from 'react';
import { Button, Input } from '@material-ui/core';
import { func, arrayOf, shape, number } from 'prop-types';

import { bookPropTypes } from 'propTypes/books';

import './style.scss';

export const CartProduct = ({
  book,
  orderingProducts,
  toggleProductToCart,
  updateOrderingProducts,
  removeOrderOfOrderingList,
  initialValueCounter,
}) => {
  const { id, title, description, img, price } = book;
  const [counterValue, setCounterValue] = useState(initialValueCounter);

  const changeCount = (value) => {
    setCounterValue(counterValue + value);
    updateOrderingProducts(id, value, orderingProducts);
  };

  const counterIncrement = () => {
    changeCount(1);
  };

  const counterDecrement = () => {
    if (counterValue !== 1) {
      changeCount(-1);
    }
  };

  const removeOrder = () => {
    removeOrderOfOrderingList(id, orderingProducts);
    toggleProductToCart(id);
  };

  return (
    <div className="cart-product">
      <div className="img-block">
        <img className="img" src={img} alt="book" />
      </div>
      <div className="book-info">
        <h2 className="product-title">{title}</h2>
        <div className="product-desc">{description}</div>
      </div>
      <div className="product-info">
        <h2 className="product-price">{price}$</h2>
        <div className="product-counter">
          <Button onClick={counterDecrement}>-</Button>
          <Input type="text" value={counterValue} />
          <Button onClick={counterIncrement}>+</Button>
        </div>
        <Button onClick={removeOrder}>Remove</Button>
      </div>
    </div>
  );
};

CartProduct.propTypes = {
  book: bookPropTypes.isRequired,
  orderingProducts: arrayOf(shape),
  toggleProductToCart: func.isRequired,
  updateOrderingProducts: func.isRequired,
  removeOrderOfOrderingList: func.isRequired,
  initialValueCounter: number.isRequired,
};
