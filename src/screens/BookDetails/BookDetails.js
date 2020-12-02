import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import { editBook, createBook } from "../../apis/books-helper";
import { getGenresFromApi, createGenre } from "../../apis/genres-helper";

const BookDetails = ({ route, navigation }) => {
  const { book } = route.params;

  const [inputs, setInputs] = useState(
    book
      ? { name: book.name, author: book.author, genre: book.genre }
      : { name: "", author: "", genre: {} }
  );
  const [allGenres, setAllGenres] = useState([]);

  const onPressButton = () => {
    if (inputs.name && inputs.author && inputs.genre.name)
      if (book) {
        manageGenre(inputs.genre.name);
        editBook(
          { ...book, name: inputs.name, author: inputs.author },
          inputs.genre._id
        );
      } else {
        manageGenre(inputs.genre.name);
        createBook(
          { name: inputs.name, author: inputs.author },
          inputs.genre._id
        );
      }
  };

  useEffect(() => {
    getGenresFromApi(setAllGenres);
  }, [navigation]);

  const manageGenre = (name) => {
    name = name.toLowerCase();
    const genre = allGenres.find((genre) => genre.name === name.toLowerCase());
    if (genre) {
      setInputs({ ...inputs, genre: { ...genre } });
    } else {
      createGenre(name, function (genre) {
        setInputs({ ...inputs, genre: { ...genre } });
      });
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.label}>Book name</Text>
        <TextInput
          style={styles.input}
          value={inputs.name}
          onChangeText={(val) => {
            setInputs({ ...inputs, name: val });
          }}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Book author</Text>
        <TextInput
          style={styles.input}
          value={inputs.author}
          onChangeText={(val) => setInputs({ ...inputs, author: val })}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Book genre</Text>
        <TextInput
          style={styles.input}
          value={inputs.genre.name}
          onChangeText={(val) =>
            setInputs({ ...inputs, genre: { ...inputs.genre, name: val } })
          }
        />
      </View>
      <View>
        <TouchableOpacity onPress={onPressButton} style={styles.button}>
          <Text style={styles.btnText}>{book ? "Edit book" : "Add book"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookDetails;
