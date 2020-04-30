import { connect } from 'react-redux';

import { SearchBar } from './SearchBar';
import { searchProducts, entryQuerystring } from 'redux/Books/actions';
import { hasSearchResult } from 'selector/bookItemSelectors';

const mapStateToProps = (state) => ({
  hasSearchResult: hasSearchResult(state),
});

const mapDispatchToProps = {
  searchProducts,
  entryQuerystring,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
