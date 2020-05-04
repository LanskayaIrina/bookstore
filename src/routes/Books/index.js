import { connect } from 'react-redux';

import { Books } from './Books';
import { pageIncrement, checkShowMore, urlBuilder, switchOnFavorites } from 'redux/Books/actions';
import { getQueryString } from 'selector/bookItemSelectors';

const mapStateToProps = (state) => ({
  list: state.products.list,
  isFetching: state.products.isFetching,
  page: state.products.page,
  showMore: state.products.showMore,
  filterParam: state.products.filterParam,
  querySearchString: getQueryString(state),
  favorites: state.favorites.products,
  isFavorites: state.products.isFavorites,
});

const mapDispatchToProps = {
  pageIncrement,
  checkShowMore,
  urlBuilder,
  switchOnFavorites,
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);
