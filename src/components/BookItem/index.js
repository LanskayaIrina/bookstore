import { connect } from 'react-redux';

import { BookItem } from './BookItem';
import { toggleProductToCart } from 'redux/Cart/actions';
import { toggleFavoriteCard } from 'redux/Favorites/actions';
import { getIsBookInCart, getIsFavoriteBook } from 'selector/bookItemSelectors';

const mapStateToProps = (state, props) => ({
  favorites: state.favorites.products,
  isBookInCart: getIsBookInCart(state, props),
  isBookInFavorite: getIsFavoriteBook(state, props),
});

const mapDispatchToProps = {
  toggleProductToCart,
  toggleFavoriteCard,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookItem);
