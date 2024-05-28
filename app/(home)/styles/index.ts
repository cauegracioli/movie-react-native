import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  rate: {
    position: "absolute",
    backgroundColor: "#FFBA38",
    top: 5,
    right: 5,
    borderRadius: 4,
    padding: 3,
    elevation: 5,
    height: 26,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 6,
    paddingRight: 6,
  },
  rateText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 11,
    shadowOpacity: 0,
  },
  view: {
    position: "relative",
    marginRight: 15,
    width: 120,
  },
  image: { width: "100%", aspectRatio: 3 / 5, borderRadius: 10 },
  container: {
    padding: 10,
  },
  text: {
    fontWeight: 700,
    fontSize: 18,
  },
  banner: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
  },
});
