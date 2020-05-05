import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { number, func, arrayOf, shape } from 'prop-types';

import CartProduct from 'components/CartProduct';
import { BOOKS } from 'constants/pathNames';

import './style.scss';

export const Cart = ({
  listProducts,
  listProductsId,
  orderingListProducts,
  orderProducts,
  getProductsForCart,
  clearListProducts,
  totalPriceCart,
  setInitialOrderingProducts,
}) => {
  const { push } = useHistory();
  useEffect(() => {
    setInitialOrderingProducts(listProductsId, orderingListProducts);
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    listProductsId.length ? getProductsForCart(listProductsId) : clearListProducts();
    // eslint-disable-next-line
  }, [listProductsId]);

  const handleBuy = () => {
    orderProducts(orderingListProducts);
    push(BOOKS);
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
          <div className="cart-footer">
            <div className="cart-control">
              <Button className="cart-checkout" onClick={handleBuy}>
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
  orderProducts: func.isRequired,
  getProductsForCart: func.isRequired,
  clearListProducts: func.isRequired,
  totalPriceCart: number.isRequired,
  setInitialOrderingProducts: func.isRequired,
};
