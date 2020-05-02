import { createSelector } from 'reselect';

const listProductsOfState = (state) => state.cart.productsList;
const listOrderingProducts = (state) => state.cart.orderingProducts;

export const totalPriceCart = createSelector(
  listProductsOfState,
  listOrderingProducts,
  (listProducts, orderingProducts) => {
    const total = listProducts.reduce((acc, item) => {
      const order = orderingProducts.find((order) => item.id === order?.id);
      if (order) {
        return acc + order?.count * item.price;
      }
      return acc;
    }, 0);
    return total;
  }
);

const counterId = (state, props) => props.book.id;
const orderingProducts = (state) => state.cart.orderingProducts;

export const getInitialValueCounter = createSelector(orderingProducts, counterId, (orderingProductsList, id) => {
  return orderingProductsList.find((order) => order?.id === id)?.count || 1;
});
