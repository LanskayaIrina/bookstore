import { connect } from 'react-redux';

import { Books } from './Books';
import { getProducts, pageIncrement, checkShowMore, filterCategory, searchProducts } from 'redux/Books/actions';
import { getQueryString } from 'selector/bookItemSelectors';

const mapStateToProps = (state) => ({
  list: state.products.list,
  isFetching: state.products.isFetching,
  page: state.products.page,
  showMore: state.products.showMore,
  filterString: state.products.filterString,
  queryString: getQueryString(state),
});

const mapDispatchToProps = {
  getProducts,
  pageIncrement,
  checkShowMore,
  filterCategory,
  searchProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);
