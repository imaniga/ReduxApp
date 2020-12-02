import React, { useContext, useEffect } from "react";
import { ScrollView } from "react-native";
import SecondaryBookComponent from "../../components/SecondaryBookComponent/SecondaryBookComponent";
import { BookContext } from "../../context/book-context";
import { REMOVE_FROM_READING, GET_STATE } from "../../context/actions";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ReadingQueue = ({ navigation }) => {
  const [state, dispatch] = useContext(BookContext);

  const getData = async () => {
    try {
      const state = await AsyncStorage.getItem("BOOKS_STATE");
      const parsedState = JSON.parse(state);
      dispatch({
        type: GET_STATE,
        payload: parsedState,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getData();
    });

    return unsubscribe;
  }, [navigation]);

  const removeBookFromReading = (id) => {
    dispatch({
      type: REMOVE_FROM_READING,
      payload: id,
    });
  };
  return (
    <ScrollView>
      {state.readingQueue.map((item) => {
        return (
          <SecondaryBookComponent
            key={item._id}
            book={item}
            onRemove={() => {
              removeBookFromReading(item._id);
            }}
          />
        );
      })}
    </ScrollView>
  );
};

export default ReadingQueue;
