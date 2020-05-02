import React from 'react';
import { func, bool, string } from 'prop-types';
import TextField from '@material-ui/core/TextField';

import './styles.scss';

export const SearchBar = ({ searchProducts, hasSearchResult, entryQuerystring, filterString }) => {
  const startSearch = (event) => {
    const {
      target: { value },
    } = event;
    entryQuerystring(value);
    setTimeout(() => {
      if (filterString) {
        searchProducts(`${value}${filterString}`);
      } else {
        searchProducts(value);
      }
    }, 3000);
  };

  return (
    <div className="search">
      <TextField type="search" onChange={startSearch} label="Entry search query..." className="search-field" />
      {!hasSearchResult && <span>Not matches...</span>}
    </div>
  );
};

SearchBar.propTypes = {
  searchProducts: func.isRequired,
  hasSearchResult: bool.isRequired,
  entryQuerystring: func.isRequired,
  filterString: string,
};

SearchBar.defaultProps = {
  filterString: '',
};
