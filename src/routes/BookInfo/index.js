import { connect } from 'react-redux';

import { BookInfo } from './BookInfo';
import { getBookById } from 'redux/Books/actions';
import { toggleFavoriteCard } from 'redux/Favorites/actions';
import { toggleProductToCart } from 'redux/Cart/actions';
import { getProductFromState, getIsBookInCart, getIsFavoriteBook } from 'selector/bookItemSelectors';

const mapStateToProps = (state, props) => ({
  isFetching: state.products.isFetching,
  book: getProductFromState(state, props) || state.products.product,
  isBookInCart: getIsBookInCart(state, props),
  isBookInFavorite: getIsFavoriteBook(state, props),
});

const mapDispatchToProps = {
  getBookById,
  toggleProductToCart,
  toggleFavoriteCard,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookInfo);
