import React from 'react';
import { shallow } from 'enzyme';

import { BookInfo } from 'routes/BookInfo/BookInfo';

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
  useParams: () => ({
    push: jest.fn(),
  }),
}));

describe('BookInfo component', () => {
  let component;
  const props = {
    getBookById: jest.fn(),
    toggleProductToCart: jest.fn(),
    toggleFavoriteCard: jest.fn(),
    isBookInFavorite: true,
    isBookInCart: true,
    book: {
      id: 1,
      title: 'Unique Contract Suffer',
      price: 106,
      description: 'description',
      img: 'https://unsplash.it/1280/720?image=432',
      category: 'Humor',
    },
  };

  const e = { stopPropagation: jest.fn() };

  beforeEach(() => {
    jest.spyOn(e, 'stopPropagation');
    component = shallow(<BookInfo {...props} />);
  });

  test('should be render', () => {
    expect(component).toBeTruthy();
  });

  test('should render title from props', () => {
    expect(component.find('h2.title').text()).toEqual('Unique Contract Suffer');
  });

  test('should render description from props', () => {
    expect(component.find('p.description').text()).toEqual('description');
  });

  test('should toggleFavoriteCard() be called with id', () => {
    component.find('button.book-bookmark').simulate('click', e);
    expect(props.toggleFavoriteCard).toHaveBeenCalledWith(props.book.id);
  });

  test('should toggleProductToCart() be called with id', () => {
    component.find('button.book-basket').simulate('click', e);
    expect(props.toggleProductToCart).toHaveBeenCalledWith(props.book.id);
  });
});
