import React, {useReducer, createContext, useState} from 'react';
import {ADD_TO_FAVOURITES, ADD_TO_READ,REMOVE_FROM_FAVOURITES,REMOVE_FROM_READING} from './actions'
// import AsyncStorage from '@react-native-community/async-storage';

export const BookContext = createContext();
 const  INITIAL_STATE =  {
     favouriteBooks:[],
     readingQueue:[],
     loading: false,
     error: null
 };


const reducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_READ:
            return {
                ...state,
                readingQueue : [...state.readingQueue,{...action.payload}]
            };
        case ADD_TO_FAVOURITES:
            return {
                ...state,
                favouriteBooks : [...state.favouriteBooks,{...action.payload}]
            };
        case REMOVE_FROM_READING :
            return {
                ...state,
                readingQueue: state.readingQueue.filter(book => book._id!==action.payload)
            }
        case REMOVE_FROM_FAVOURITES :
            return {
                ...state,
                favouriteBooks: state.favouriteBooks.filter(book => book._id!==action.payload)
            }              
        case "START":
            return {
                loading: true
            };
        case "COMPLETE":
            return {
                loading: false
            };    
        default: throw new Error();
    }
}

export const BookContextProvider =  props => {

//  useEffect(() => {
//     AsyncStorage.setItem('BOOKS_STATE', `${booksState}`);
//   }, [booksState]);



 const [state, dispatch] = useReducer(reducer,INITIAL_STATE );

    return (
    
        <BookContext.Provider value ={[state, dispatch]}>
            {props.children}
        </BookContext.Provider>
    )
}