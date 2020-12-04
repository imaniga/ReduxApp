export const addToRead = (book) => {
  return {
    type: "ADD_TO_READ",
    payload: book,
  };
};

export const addToFavourites = (book) => {
  return {
    type: "ADD_TO_FAVOURITES",
    payload: book,
  };
};

export const deleteFromRead = (book) => {
  return {
    type: "DELETE_FROM_READ",
    payload: book,
  };
};

export const deleteFromFavourites = (book) => {
  return {
    type: "DELETE_FROM_FAVOURITES",
    payload: book,
  };
};
