import { StyleSheet } from "react-native";

import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../utils/Metrics";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: horizontalScale(15),
    justifyContent: "space-between",
    alignItems: "center",
  },
  row: { flexDirection: "row", alignItems: "center" },
  text: { fontWeight: "bold" },
  date: { color: "grey" },
  antDesign: { paddingRight: 20 },
});
