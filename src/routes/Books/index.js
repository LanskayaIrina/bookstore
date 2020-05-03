import { connect } from 'react-redux';

import { Books } from './Books';
import { pageIncrement, checkShowMore, urlBuilder } from 'redux/Books/actions';
import { getQueryString } from 'selector/bookItemSelectors';

const mapStateToProps = (state) => ({
  list: state.products.list,
  isFetching: state.products.isFetching,
  page: state.products.page,
  showMore: state.products.showMore,
  filterParam: state.products.filterParam,
  querySearchString: getQueryString(state),
});

const mapDispatchToProps = {
  pageIncrement,
  checkShowMore,
  urlBuilder,
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);
