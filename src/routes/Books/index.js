import { connect } from 'react-redux';

import { Books } from './Books';
import { getCards } from 'redux/Books/actions';

const mapStateToProps = (state) => ({
  list: state.products.list,
  isFetching: state.products.isFetching,
});

const mapDispatchToProps = {
  getCards,
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);
