import { connect } from 'react-redux';

import { CartProduct } from './CartProduct';
import { toggleProductToCart, updateOrderingProducts, removeOrderOfOrderingList } from 'redux/Cart/actions';
import { getInitialValueCounter } from 'selector/cartSelectors';

const mapStateToProps = (state, props) => ({
  initialValueCounter: getInitialValueCounter(state, props),
  orderingProducts: state.cart.orderingProducts,
});

const mapDispatchToProps = {
  toggleProductToCart,
  updateOrderingProducts,
  removeOrderOfOrderingList,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartProduct);
