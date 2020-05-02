import { connect } from 'react-redux';

import { Cart } from './Cart';
import { orderProducts, getProductsForCart, clearListProducts, setInitialOrderingProducts } from 'redux/Cart/actions';
import { totalPriceCart } from 'selector/cartSelectors';

const mapStateToProps = (state) => ({
  listProductsId: state.cart.productsListId,
  listProducts: state.cart.productsList,
  orderingListProducts: state.cart.orderingProducts,
  totalPriceCart: totalPriceCart(state),
});

const mapDispatchToProps = {
  orderProducts,
  getProductsForCart,
  clearListProducts,
  setInitialOrderingProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
