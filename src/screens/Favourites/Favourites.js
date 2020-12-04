import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import SecondaryBookComponent from "../../components/SecondaryBookComponent/SecondaryBookComponent";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromFavourites } from "../../redux/actionCreator";

const Favourites = () => {
  const booksState = useSelector((state) => state.books);
  const dispatch = useDispatch();

  return (
    <ScrollView>
      {booksState.favouriteBooks.map((item) => {
        return (
          <SecondaryBookComponent
            key={item._id}
            book={item}
            onRemove={() => dispatch(deleteFromFavourites(item._id))}
          />
        );
      })}
    </ScrollView>
  );
};

export default Favourites;
