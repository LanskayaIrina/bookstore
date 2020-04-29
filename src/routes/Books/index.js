import { connect } from 'react-redux';

import { Books } from './Books';
import { getCards, pageIncrement, checkShowMore } from 'redux/Books/actions';

const mapStateToProps = (state) => ({
  list: state.products.list,
  isFetching: state.products.isFetching,
  page: state.products.page,
  showMore: state.products.showMore,
});

const mapDispatchToProps = {
  getCards,
  pageIncrement,
  checkShowMore,
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);
