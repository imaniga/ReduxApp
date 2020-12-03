export const addToRead = (book) => {
  return {
    type: "ADD_TO_READ",
    payload: book,
  };
};
