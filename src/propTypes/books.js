import { string, number, shape } from 'prop-types';

export const bookPropTypes = shape({
  title: string.isRequired,
  price: number.isRequired,
  description: string.isRequired,
  img: string.isRequired,
  category: string.isRequired,
});
