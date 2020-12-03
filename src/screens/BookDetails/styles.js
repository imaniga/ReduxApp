import { StyleSheet } from "react-native";
import { Green, Black, White } from "../../utils/colors";

const styles = StyleSheet.create({
  input: {
    height: 32,
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: Black,
  },
  container: {
    marginHorizontal: 8,
    marginTop: 16,
  },
  label: {
    fontSize: 16,
  },
  button: {
    alignSelf: "flex-end",
    marginRight: 32,
    height: 40,
    backgroundColor: Green,
    justifyContent: "center",
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  btnText: {
    color: White,
    fontSize: 14,
  },
});

export default styles;
