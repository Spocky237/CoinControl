import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5172e8",
    width: 340,
    height: 310,
    borderRadius: 40,
  },
  myBudget: {
    textAlign: "center",
    paddingTop: 20,
    fontSize: 15,
    fontWeight: "500",
  },
  dollar: { textAlign: "center" },
  myMoney: { fontWeight: "bold", fontSize: 35 },
  depositAndSpanding: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
  },
  depositButton: {
    backgroundColor: "#3560e6",
    width: 150,
    height: 40,
    marginLeft: 10,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  depositAndSpendingButtonText: { fontSize: 15, marginLeft: 5 },
  spendingButton: {
    backgroundColor: "#3560e6",
    width: 150,
    height: 40,
    marginRight: 10,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  budgetOverviewText: {
    fontSize: 16,
    paddingTop: 20,
    paddingLeft: 15,
    fontWeight: "400",
  },
  budgetOverviewContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
