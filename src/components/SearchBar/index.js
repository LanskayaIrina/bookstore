import { connect } from 'react-redux';

import { SearchBar } from './SearchBar';
import { urlBuilder, entrySearchQueryString } from 'redux/Books/actions';
import { hasSearchResult } from 'selector/bookItemSelectors';

const mapStateToProps = (state) => ({
  hasSearchResult: hasSearchResult(state),
  filterParam: state.products.filterParam,
  favorites: state.favorites.products,
  isFavorites: state.products.isFavorites,
});

const mapDispatchToProps = {
  urlBuilder,
  entrySearchQueryString,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
