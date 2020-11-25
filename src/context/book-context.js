import React, {useReducer, createContext, useState} from 'react';
// import AsyncStorage from '@react-native-community/async-storage';

export const BookContext = createContext();
 const  INITIAL_STATE =  {
     books: [],
     favouriteBooks:[],
     readingQueue:[],
     loading: false,
     error: null
 };


const reducer = (state, action) => {
    switch (action.type) {
        case "GET_BOOKS":
            return {
                ...state,
                books: [...action.payload]
            }
        case "ADD_BOOK_TO_READ":
            return {
                ...state,
                readingQueue : [...state.readingQueue,{...action.payload}]
            };
        case "ADD_BOOK_TO_FAVOURITES":
            return {
                ...state,
                favouriteBooks : [...state.favouriteBooks,{...action.payload}]
            };
        case "ADD_BOOK":
            return {
                books : [...state.books,{...action.payload}]
            };    
        case "DELETE_BOOK":
            return {
                books : state.books.filter(
                    book => book.id !== action.payload
                )
            };
        case "UPDATE_BOOK":
            return {
                books: state.books.map(book=>{
                    if(book.id===action.payload.id){
                        const obj = {...action.payload}
                        return obj
                    }
                    else return book;
                })
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