import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { number, func, arrayOf, shape } from 'prop-types';

import CartProduct from 'components/CartProduct';
import Checkout from 'routes/Checkout';
import { CHECKOUT } from 'constants/pathNames';

import './style.scss';

export const Cart = ({
  listProducts,
  listProductsId,
  orderingListProducts,
  getProductsForCart,
  clearListProducts,
  totalPriceCart,
  setInitialOrderingProducts,
}) => {
  const { push, location } = useHistory();

  const [isOpenCheckout, toggleOpenCheckout] = useState(false);

  useEffect(() => {
    if (location.pathname === CHECKOUT) toggleOpenCheckout(true);
  }, [location]);

  useEffect(() => {
    setInitialOrderingProducts(listProductsId, orderingListProducts);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    listProductsId.length ? getProductsForCart(listProductsId) : clearListProducts();
    // eslint-disable-next-line
  }, [listProductsId]);

  const openCheckout = () => {
    toggleOpenCheckout(true);
    push(CHECKOUT);
  };

  return (
    <>
      {listProductsId.length ? (
        <div className="cart">
          <div className="cart-list">
            {listProducts?.map((product) => (
              <CartProduct key={product.id} book={product} />
            ))}
          </div>
          <Checkout isOpen={isOpenCheckout} toggleOpenCheckout={toggleOpenCheckout} />
          <div className="cart-footer">
            <div className="cart-control">
              <Button className="cart-checkout" onClick={openCheckout}>
                Checkout
              </Button>
              <div className="cart-price">
                <span>Total: {totalPriceCart}$</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <span>Cart is empty:(</span>
      )}
    </>
  );
};

Cart.propTypes = {
  listProducts: arrayOf(shape),
  listProductsId: arrayOf(number),
  orderingListProducts: arrayOf(shape),
  getProductsForCart: func.isRequired,
  clearListProducts: func.isRequired,
  totalPriceCart: number.isRequired,
  setInitialOrderingProducts: func.isRequired,
};
