import { ScrollView } from "react-native";
import SecondaryBookComponent from "../../components/SecondaryBookComponent/SecondaryBookComponent";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromRead } from "../../redux/actionCreator";

const ReadingQueue = () => {
  const booksState = useSelector((state) => state.books);
  const dispatch = useDispatch();
  return (
    <ScrollView>
      {booksState.readingQueue.map((item) => {
        return (
          <SecondaryBookComponent
            key={item._id}
            book={item}
            onRemove={() => {
              dispatch(deleteFromRead(item._id));
            }}
          />
        );
      })}
    </ScrollView>
  );
};

export default ReadingQueue;
