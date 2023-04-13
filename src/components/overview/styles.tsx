import { StyleSheet } from "react-native";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../utils/Metrics";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5172e8",
    width: horizontalScale(353),
    height: verticalScale(415),
    marginTop: verticalScale(15),
    borderRadius: moderateScale(40),
  },
  myBudget: {
    textAlign: "center",
    paddingTop: verticalScale(25),
    fontSize: moderateScale(15),
    fontWeight: "500",
  },
  dollar: { textAlign: "center" },
  myMoney: { fontWeight: "bold", fontSize: 35 },
  depositAndSpending: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: verticalScale(15),
  },
  depositButton: {
    backgroundColor: "#3560e6",
    width: horizontalScale(160),
    height: verticalScale(60),
    marginLeft: horizontalScale(10),
    borderRadius: moderateScale(35),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  depositAndSpendingButtonText: { fontSize: 15, marginLeft: 5 },
  spendingButton: {
    backgroundColor: "#3560e6",
    width: horizontalScale(160),
    height: verticalScale(60),
    marginRight: horizontalScale(10),
    borderRadius: moderateScale(35),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  budgetOverviewText: {
    fontSize: moderateScale(16),
    paddingTop: verticalScale(25),
    paddingLeft: horizontalScale(15),
    fontWeight: "400",
  },
  budgetOverviewContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
