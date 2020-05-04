import React from 'react';
import { func, bool, string, arrayOf, number } from 'prop-types';
import TextField from '@material-ui/core/TextField';

import './styles.scss';

export const SearchBar = ({
  urlBuilder,
  hasSearchResult,
  entrySearchQueryString,
  filterParam,
  favorites,
  isFavorites,
}) => {
  const startSearch = (event) => {
    const {
      target: { value },
    } = event;

    entrySearchQueryString(value);

    setTimeout(() => {
      urlBuilder({
        page: 1,
        title_like: value,
        category: filterParam,
        id: isFavorites ? favorites : '',
      });
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
  urlBuilder: func.isRequired,
  hasSearchResult: bool.isRequired,
  entrySearchQueryString: func.isRequired,
  filterString: string,
  isFavorites: bool.isRequired,
  favorites: arrayOf(number),
};

SearchBar.defaultProps = {
  filterString: '',
};
