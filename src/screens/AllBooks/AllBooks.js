import React, { useLayoutEffect, useEffect, useState } from "react";
import { ScrollView, TouchableOpacity, Text } from "react-native";
import Book from "../../components/Book/Book";
import routes from "../../utils/routes";
import styles from "./styles";
import { getBooksFromApi, deleteBook } from "../../apis/books-helper";
import { addToRead, addToFavourites } from "../../redux/actionCreator";
import { useDispatch } from "react-redux";

const AllBooks = ({ navigation }) => {
  const dispatch = useDispatch();
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
            onFavouritePress={() => dispatch(addToFavourites(item))}
            onReadPress={() => dispatch(addToRead(item))}
          />
        );
      })}
    </ScrollView>
  );
};

export default AllBooks;
