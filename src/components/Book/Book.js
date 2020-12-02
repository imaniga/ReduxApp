import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const Book = ({ book, onDelete, onEdit, onFavouritePress, onReadPress }) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.photoContainer}>
          <View style={styles.photo}></View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{book.name}</Text>
          <Text style={styles.author}>by: {book.author}</Text>
          <Text style={styles.author}>genre: {book.genre.name}</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress={onFavouritePress}>
              <Text style={styles.buttonText}>Favourites</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onReadPress}>
              <Text style={styles.buttonText}>Reading queue</Text>
            </TouchableOpacity>
          </View>
          {book.isRead && <Text style={styles.bookRead}>You read this!</Text>}
        </View>
      </View>
      <View style={styles.deleteContainer}>
        <TouchableOpacity onPress={onEdit} style={styles.deleteBtn}>
          <Text style={styles.deleteTxt}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete} style={styles.deleteBtn}>
          <Text style={styles.deleteTxt}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Book;
