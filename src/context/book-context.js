import React, { useReducer, createContext } from "react";
import {
  ADD_TO_FAVOURITES,
  ADD_TO_READ,
  REMOVE_FROM_FAVOURITES,
  REMOVE_FROM_READING,
  GET_STATE,
} from "./actions";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const BookContext = createContext();
const INITIAL_STATE = {
  favouriteBooks: [],
  readingQueue: [],
  loading: false,
  error: null,
};
const storeData = async (data) => {
  try {
    await AsyncStorage.setItem("BOOKS_STATE", JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

let newState;
const reducer = (state, action) => {
  switch (action.type) {
    case GET_STATE:
      return {
        ...action.payload,
      };
    case ADD_TO_READ:
      if (!state.readingQueue.find((book) => book._id === action.payload._id))
        newState = {
          ...state,
          readingQueue: [...state.readingQueue, { ...action.payload }],
        };
      storeData(newState);
      return newState;
    case ADD_TO_FAVOURITES:
      if (!state.favouriteBooks.find((book) => book._id === action.payload._id))
        newState = {
          ...state,
          favouriteBooks: [...state.favouriteBooks, { ...action.payload }],
        };
      storeData(newState);
      return newState;
    case REMOVE_FROM_READING:
      newState = {
        ...state,
        readingQueue: state.readingQueue.filter(
          (book) => book._id !== action.payload
        ),
      };
      storeData(newState);
      return newState;
    case REMOVE_FROM_FAVOURITES:
      newState = {
        ...state,
        favouriteBooks: state.favouriteBooks.filter(
          (book) => book._id !== action.payload
        ),
      };
      storeData(newState);
      return newState;
    case "START":
      return {
        loading: true,
      };
    case "COMPLETE":
      return {
        loading: false,
      };
    default:
      throw new Error();
  }
};

export const BookContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <BookContext.Provider value={[state, dispatch]}>
      {props.children}
    </BookContext.Provider>
  );
};
