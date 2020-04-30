import React from 'react';
import { func, bool } from 'prop-types';
import TextField from '@material-ui/core/TextField';

import './styles.scss';

export const SearchBar = ({ searchProducts, hasSearchResult, entryQuerystring }) => {
  const startSearch = (event) => {
    const {
      target: { value },
    } = event;
    entryQuerystring(value);
    setTimeout(() => {
      searchProducts(value);
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
};
