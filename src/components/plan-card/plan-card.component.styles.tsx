import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  topContainer: {
    backgroundColor: "#3e64f0",
    width: 340,
    height: 100,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 10,
  },
  bottomContainer: {
    backgroundColor: "white",
    width: 340,
    height: 100,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  planTitle: {
    color: "black",
    fontSize: 24,
    fontWeight: "500",
    paddingVertical: 5,
  },
});
