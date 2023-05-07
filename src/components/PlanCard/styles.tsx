import { StyleSheet } from "react-native";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../utils/Metrics";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    margin: moderateScale(5),
  },
  headerContainer: {
    backgroundColor: "#3e64f0",
    width: horizontalScale(355),
    height: verticalScale(128),
    borderTopRightRadius: moderateScale(20),
    borderTopLeftRadius: moderateScale(20),
    padding: 10,
  },
  footerContainer: {
    backgroundColor: "white",
    width: horizontalScale(355),
    height: verticalScale(128),
    borderBottomRightRadius: moderateScale(20),
    borderBottomLeftRadius: moderateScale(20),
    paddingVertical: verticalScale(5),
    paddingHorizontal: horizontalScale(10),
  },
  planTitle: {
    color: "black",
    fontSize: moderateScale(24),
    fontWeight: "500",
    paddingVertical: verticalScale(5),
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 5,
  },
  progressBar: { borderRadius: moderateScale(10), height: horizontalScale(10) },
});
