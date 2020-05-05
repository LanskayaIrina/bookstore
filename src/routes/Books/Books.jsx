import React, { useEffect } from 'react';
import { arrayOf, func, bool, shape, number, string } from 'prop-types';
import { trackPromise } from 'react-promise-tracker';

import BookItem from 'components/BookItem';
import { BooksSlider } from 'components/Slider';
import SearchBar from 'components/SearchBar';
import { bookPropTypes } from 'propTypes/books';
import SideBar from 'components/Layout/SideBar';
import { Button } from 'components/_shared/Button';

import './styles.scss';

export const Books = ({
  list,
  page,
  showMore,
  pageIncrement,
  checkShowMore,
  querySearchString,
  filterParam,
  urlBuilder,
  favorites,
  isFavorites,
  switchOnFavorites,
}) => {
  const handleMoreCards = () => {
    urlBuilder({
      page,
      category: filterParam,
      title_like: querySearchString,
      id: isFavorites ? favorites : '',
    });
    pageIncrement();
  };

  const toggleFavoritesProducts = () => {
    switchOnFavorites();
  };

  useEffect(() => {
    if (!list.length) {
      trackPromise(urlBuilder());
      pageIncrement();
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    checkShowMore(list);
    // eslint-disable-next-line
  }, [list]);

  useEffect(() => {
    urlBuilder({
      id: isFavorites ? favorites : '',
      page: 1,
    });
    // eslint-disable-next-line
  }, [isFavorites]);

  return (
    <div className="books">
      <div className="books-page">
        <SideBar page={page} />
        <div className="container">
          <BooksSlider />
          <div className="row">
            <SearchBar />
            <Button
              className="btn__switch-favorites"
              text={isFavorites ? 'Show All' : 'Show favorites'}
              onClick={toggleFavoritesProducts}
            />
          </div>
          <div className="books-items">
            {list.map((book) => (
              <BookItem key={book.id} book={book} />
            ))}
          </div>
          <div className="books-more">{showMore ? <Button onClick={handleMoreCards} text="Show more" /> : null}</div>
        </div>
      </div>
    </div>
  );
};

Books.propTypes = {
  list: arrayOf(bookPropTypes).isRequired,
  urlBuilder: func.isRequired,
  page: number.isRequired,
  showMore: bool.isRequired,
  pageIncrement: func.isRequired,
  checkShowMore: func.isRequired,
  location: shape({}).isRequired,
  queryString: string.isRequired,
  filterParam: arrayOf(string),
  favorites: arrayOf(number),
  isFavorites: bool.isRequired,
};

Books.defaultProps = {
  queryString: '',
};
