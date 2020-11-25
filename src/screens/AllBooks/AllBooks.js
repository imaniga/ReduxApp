import React, {useContext, useLayoutEffect, useEffect,useState} from 'react'
import {ScrollView, TouchableOpacity, Text} from 'react-native'
import Book from '../../components/Book/Book'
import { BookContext } from '../../context/book-context'
import routes from '../../utils/routes'
import styles from './styles'
import booksApi from '../../apis/books'

 
const AllBooks = ({navigation}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <TouchableOpacity onPress={()=>navigation.navigate(routes.bookDetails,{book:null})} style={styles.headerButton}>
                <Text style={styles.headerButtonText}>+</Text>
            </TouchableOpacity>
          ),
        });
      }, [navigation]);
      
      const getBooksFromApi = () => {
        booksApi.get('/books')
       
        .then(resp => {
         console.log("din get", resp.data)
         dispatch({
             type:'GET_BOOKS',
             payload:resp.data
         })
       })
       .catch(err => {
           console.log("eroarea astaa",err)
       })
          
       }

       useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          getBooksFromApi()
        });
    
       
        return unsubscribe;
      }, [navigation])

    const [state, dispatch] = useContext(BookContext);
    const deleteBook = id => {
        dispatch({
            type: 'DELETE_BOOK',
            payload:id
        })
    }

    const addBookToFavourites = (book) => {
      dispatch({
          type: "ADD_BOOK_TO_FAVOURITES",
          payload:book
        });
  }

  const addBookToRead = (book) => {
    dispatch({
        type: "ADD_BOOK_TO_READ",
        payload:book
      });
}

    return(
        <ScrollView>
                {state.books.map((item, index)=>{
                return (<Book
                     key={index}
                     book ={item} 
                     onDelete = {()=>deleteBook(item.id)}
                     onEdit ={()=>navigation.navigate(routes.bookDetails,{book:item})}
                     onFavouritePress = {()=>addBookToFavourites(item)}
                     onReadPress = {()=>addBookToRead(item)}
                     />)
            })}
       
        </ScrollView>
    )
}




export default AllBooks;