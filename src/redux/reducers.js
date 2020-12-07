import { combineReducers } from "redux";
import {
  ADD_TO_FAVOURITES,
  ADD_TO_READ,
  DELETE_FROM_FAVOURITES,
  DELETE_FROM_READ,
} from "./actions";

const initialState = {
  readingQueue: [],
  favouriteBooks: [],
};
let newState;
const booksReducer = (state = initialState, action) => {
  if (action.type === ADD_TO_READ) {
    if (!state.readingQueue.find((book) => book._id === action.payload._id))
      newState = {
        ...state,
        readingQueue: [...state.readingQueue, action.payload],
      };
    return newState;
  }

  if (action.type === ADD_TO_FAVOURITES) {
    if (!state.readingQueue.find((book) => book._id === action.payload._id))
      newState = {
        ...state,
        favouriteBooks: [...state.favouriteBooks, action.payload],
      };
    return newState;
  }

  if (action.type === DELETE_FROM_FAVOURITES) {
    const newState = {
      ...state,
      favouriteBooks: state.favouriteBooks.filter(
        (book) => book._id !== action.payload
      ),
    };
    return newState;
  }

  if (action.type === DELETE_FROM_READ) {
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
