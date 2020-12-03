import { StyleSheet } from "react-native";
import { White } from "../../utils/colors";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    flexDirection: "row",
    marginVertical: 8,
    backgroundColor: White,
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textContainer: {
    flex: 5,
    flexDirection: "column",
    justifyContent: "center",
    marginVertical: 8,
  },
  button: {
    height: 24,
    width: 24,
    backgroundColor: "red",
    borderRadius: 12,
    alignItems: "center",
    alignSelf: "center",
    marginTop: "auto",
    marginBottom: "auto",
  },
  buttonText: {
    marginBottom: "auto",
    color: White,
    fontSize: 18,
  },
  text: {
    fontSize: 20,
    marginLeft: 16,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
});

export default styles;
