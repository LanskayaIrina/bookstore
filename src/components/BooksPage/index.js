import { connect } from 'react-redux';
import { BooksPage } from './BooksPage';
import { getCards } from '../../redux/Books/actions';

const mapStateToProps = (state) => ({
  cards: state.products.cards,
  isFetching: state.products.isFetching,
});

const mapDispatchToProps = {
  getCards,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksPage);
