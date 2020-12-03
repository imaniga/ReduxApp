import { combineReducers } from "redux";

const booksReducer = () => {
  return {
    readingQueue: [],
    favouriteBooks: [],
  };
};

const addToReadReducer = (book = null, action) => {
  if (action.type === "ADD_TO_READ") {
    return action.payload;
  }

  return book;
};

export default combineReducers({
  books: booksReducer,
  addToRead: addToReadReducer,
});
