import React, { useEffect } from 'react';
import { arrayOf, func, bool, shape, number, string } from 'prop-types';

import BookItem from 'components/BookItem';
import { Spinner } from 'components/Spinner/Spinner';
import { BooksSlider } from 'components/Slider';
import SearchBar from 'components/SearchBar';
import { bookPropTypes } from 'propTypes/books';

import './styles.scss';

export const Books = ({
  list,
  getCards,
  isFetching,
  page,
  showMore,
  pageIncrement,
  checkShowMore,
  queryString,
  searchProducts,
}) => {
  const handleMoreCards = () => {
    if (queryString) {
      searchProducts(queryString, page);
    } else {
      getCards(page);
    }
    pageIncrement();
  };

  useEffect(() => {
    getCards();
    pageIncrement();
  }, []);

  useEffect(() => {
    checkShowMore(list);
  }, [list]);

  return (
    <div className="books">
      <>
        <BooksSlider />
        <SearchBar />
        <div className="books-content">
          {list.map((book) => (
            <BookItem key={book.id} book={book} />
          ))}
        </div>
      </>
      {isFetching ? <Spinner /> : null}
      <div className="books-more">
        {showMore ? (
          <button className="books-more-btn" onClick={handleMoreCards}>
            Show more
          </button>
        ) : null}
      </div>
    </div>
  );
};

Books.propTypes = {
  list: arrayOf(bookPropTypes).isRequired,
  getCards: func.isRequired,
  isFetching: bool.isRequired,
  page: number.isRequired,
  showMore: bool.isRequired,
  pageIncrement: func.isRequired,
  checkShowMore: func.isRequired,
  location: shape({}).isRequired,
  queryString: string.isRequired,
  searchProducts: func.isRequired,
};

Books.defaultProps = {
  title: '',
  price: null,
  description: '',
  img: '',
  category: '',
};
