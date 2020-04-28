import React, { useEffect } from 'react';
import { arrayOf, func, bool, shape, string, number } from 'prop-types';

import { Card } from 'components/Card';
import { Spiner } from 'components/Spiner';
import { BooksSlider } from 'components/Slider';

import './styles.scss';

export const Books = ({ list, getCards, isFetching }) => {
  useEffect(() => {
    getCards();
  }, []);

  return (
    <div className="books">
      {isFetching ? (
        <Spiner />
      ) : (
        <>
          <BooksSlider />
          <div className="books-content">
            {list.map((card) => (
              <Card card={card} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

Books.propTypes = {
  list: arrayOf(
    shape({
      title: string,
      id: number.isRequired,
      price: number,
      description: string,
      img: string,
      category: string,
    })
  ).isRequired,
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
