export const getIsBookInCart = (state, props) => state.cart.products.find((product) => product === props.book.id);

export const getIsFavoriteBook = (state, props) =>
  state.favorites.products.find((product) => product === props.book.id);
