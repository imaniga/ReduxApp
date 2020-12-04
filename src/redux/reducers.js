import { combineReducers } from "redux";

const initialState = {
  readingQueue: [],
  favouriteBooks: [],
};

const booksReducer = (state = initialState, action) => {
  if (action.type === "ADD_TO_READ") {
    const newState = {
      ...state,
      readingQueue: [...state.readingQueue, action.payload],
    };
    return newState;
  }

  if (action.type === "ADD_TO_FAVOURITES") {
    const newState = {
      ...state,
      favouriteBooks: [...state.favouriteBooks, action.payload],
    };
    return newState;
  }

  if (action.type === "DELETE_FROM_FAVOURITES") {
    const newState = {
      ...state,
      favouriteBooks: state.favouriteBooks.filter(
        (book) => book._id !== action.payload
      ),
    };
    return newState;
  }

  if (action.type === "DELETE_FROM_READ") {
    const newState = {
      ...state,
      readingQueue: state.readingQueue.filter(
        (book) => book._id !== action.payload
      ),
    };
    return newState;
  }

  return state;
};

export default combineReducers({
  books: booksReducer,
});
