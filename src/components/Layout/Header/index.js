import { connect } from 'react-redux';

import { Header } from './Header';

const mapStateToProps = (state) => ({
  cartCount: state.cart.products.length,
});

export default connect(mapStateToProps, null)(Header);
