import { connect } from 'react-redux';

import { Checkout } from './Checkout';
import { orderProducts } from 'redux/Cart/actions';

const mapStateToProps = (state) => ({
  orderingListProducts: state.cart.orderingProducts,
});

const mapDispatchToProps = {
  orderProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
