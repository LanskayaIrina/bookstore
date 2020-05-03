import { connect } from 'react-redux';

import { SideBar } from './SideBar';
import { getCategories, urlBuilder, entryFilterParam } from 'redux/Books/actions';

const mapStateToProps = (state) => ({
  categories: state.products.categories,
  searchString: state.products.searchQueryString,
  hasCategories: state.products.categories.length,
});

const mapDispatchToProps = {
  getCategories,
  urlBuilder,
  entryFilterParam,
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
