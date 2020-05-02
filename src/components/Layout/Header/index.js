import { connect } from 'react-redux';

import { Header } from './Header';

const mapStateToProps = (state) => ({
  cartCount: state.cart.productsListId.length,
});

export default connect(mapStateToProps, null)(Header);
