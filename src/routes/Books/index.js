import { connect } from 'react-redux';

import { Books } from './Books';
import { getCards, pageIncrement, checkShowMore, searchProducts } from 'redux/Books/actions';
import { getQueryString } from 'selector/bookItemSelectors';

const mapStateToProps = (state) => ({
  list: state.products.list,
  isFetching: state.products.isFetching,
  page: state.products.page,
  showMore: state.products.showMore,
  queryString: getQueryString(state),
});

const mapDispatchToProps = {
  getCards,
  pageIncrement,
  checkShowMore,
  searchProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);
