import React, { useEffect } from 'react';
import { arrayOf, func, bool, shape, number, string } from 'prop-types';

import BookItem from 'components/BookItem';
import { Spinner } from 'components/Spinner/Spinner';
import { BooksSlider } from 'components/Slider';
import SearchBar from 'components/SearchBar';
import { bookPropTypes } from 'propTypes/books';
import SideBar from 'components/Layout/SideBar';

import './styles.scss';

export const Books = ({
  list,
  isFetching,
  page,
  showMore,
  pageIncrement,
  checkShowMore,
  querySearchString,
  filterParam,
  urlBuilder,
}) => {
  const handleMoreCards = () => {
    urlBuilder({
      category: filterParam,
      page: 1,
      title_like: querySearchString,
    });
    pageIncrement();
  };

  useEffect(() => {
    urlBuilder();
    pageIncrement();
  }, []);

  useEffect(() => {
    checkShowMore(list);
  }, [list]);

  return (
    <div className="books">
      <div className="books-page">
        <SideBar page={page} />
        <div className="container">
          <BooksSlider />
          <SearchBar />
          <div className="books-items">
            {list.map((book) => (
              <BookItem key={book.id} book={book} />
            ))}
          </div>
          {isFetching ? <Spinner /> : null}
          <div className="books-more">
            {showMore ? (
              <button className="books-more-btn" onClick={handleMoreCards}>
                Show more
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

Books.propTypes = {
  list: arrayOf(bookPropTypes).isRequired,
  getProducts: func.isRequired,
  isFetching: bool.isRequired,
  page: number.isRequired,
  showMore: bool.isRequired,
  pageIncrement: func.isRequired,
  checkShowMore: func.isRequired,
  location: shape({}).isRequired,
  queryString: string.isRequired,
  filterParam: arrayOf(string),
  searchProducts: func.isRequired,
};
