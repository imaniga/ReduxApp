import { StyleSheet } from "react-native";
import { Green, HeaderColor, Grey, White } from "../../utils/colors";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    borderRadius: 10,
    backgroundColor: White,
    marginTop: 16,
    marginBottom: 8,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  photoContainer: {
    flex: 1,
  },
  infoContainer: {
    flex: 3,
    paddingLeft: 16,
    paddingTop: 8,
  },

  photo: {
    backgroundColor: Grey,
    width: 50,
    height: 60,
    alignSelf: "center",
    marginTop: "auto",
    marginBottom: "auto",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "column",
    marginTop: 8,
    paddingRight: 40,
  },
  button: {
    marginBottom: 8,
    backgroundColor: Green,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: White,
    marginHorizontal: 4,
    marginVertical: 4,
  },
  bookRead: {
    color: Green,
    marginBottom: 8,
  },
  deleteContainer: {
    marginHorizontal: 24,
    justifyContent: "flex-end",
    flexDirection: "row",
    paddingRight: 12,
  },
  deleteText: {
    color: HeaderColor,
  },
  deleteBtn: {
    marginLeft: 16,
  },
});

export default styles;
