import React, { useEffect } from 'react';
import { arrayOf, func, bool, shape, string, number } from 'prop-types';

import BookItem from 'components/BookItem';
import { Spinner } from 'components/Spinner/Spinner';
import { BooksSlider } from 'components/Slider';
import { bookPropTypes } from 'propTypes/books';

import './styles.scss';

export const Books = ({ list, getCards, isFetching }) => {
  useEffect(() => {
    getCards();
  }, []);

  return (
    <div className="books">
      {isFetching ? (
        <Spinner />
      ) : (
        <>
          <BooksSlider />
          <div className="books-content">
            {list.map((book) => (
              <BookItem key={book.id} book={book} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

Books.propTypes = {
  list: arrayOf(bookPropTypes).isRequired,
  getCards: func.isRequired,
  isFetching: bool.isRequired,
  location: shape({}).isRequired,
};

Books.defaultProps = {
  title: '',
  price: null,
  description: '',
  img: '',
  category: '',
};
