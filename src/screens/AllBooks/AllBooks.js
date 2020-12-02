import React, { useContext, useLayoutEffect, useEffect, useState } from "react";
import { ScrollView, TouchableOpacity, Text } from "react-native";
import Book from "../../components/Book/Book";
import { BookContext } from "../../context/book-context";
import routes from "../../utils/routes";
import styles from "./styles";
import { getBooksFromApi, deleteBook } from "../../apis/books-helper";
import { ADD_TO_FAVOURITES, ADD_TO_READ } from "../../context/actions";

const AllBooks = ({ navigation }) => {
  const [booksState, setBooksState] = useState([]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(routes.bookDetails, { book: null })
          }
          style={styles.headerButton}
        >
          <Text style={styles.headerButtonText}>+</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    getBooksFromApi(setBooksState);
  }, [navigation]);

  const [state, dispatch] = useContext(BookContext);

  const addBookToFavourites = (book) => {
    dispatch({
      type: ADD_TO_FAVOURITES,
      payload: book,
    });
  };

  const addBookToRead = (book) => {
    dispatch({
      type: ADD_TO_READ,
      payload: book,
    });
  };

  return (
    <ScrollView>
      {booksState.map((item) => {
        return (
          <Book
            key={item._id}
            book={item}
            onDelete={() => deleteBook(item._id)}
            onEdit={() =>
              navigation.navigate(routes.bookDetails, { book: item })
            }
            onFavouritePress={() => addBookToFavourites(item)}
            onReadPress={() => addBookToRead(item)}
          />
        );
      })}
    </ScrollView>
  );
};

export default AllBooks;
