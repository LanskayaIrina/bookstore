import { connect } from 'react-redux';

import { Header } from './Header';
import { authUser } from 'redux/Auth/actions';

const mapStateToProps = (state) => ({
  cartCount: state.cart.productsListId.length,
  isLogged: state.auth.isAuthorized,
});

const mapDispatchToProps = {
  authUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
