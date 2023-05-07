import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";

import {
  moderateScale,
  horizontalScale,
  verticalScale,
} from "../../utils/Metrics";

export const IncomeBox = ({ incomeBudget }) => {
  return (
    <View style={styles.depositContainer}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={styles.iconContainer}>
          <AntDesign name="download" size={moderateScale(16)} color="white" />
        </View>
        <View style={styles.row}>
          <Feather name="trending-up" size={moderateScale(20)} color="green" />
          <Text style={styles.percent}>+2,8%</Text>
        </View>
      </View>
      <View style={[styles.row, { justifyContent: "space-between" }]}>
        <View>
          <Text style={styles.text}>Revenue</Text>
          <Text style={styles.incomeText}>${incomeBudget}</Text>
        </View>
        <Feather name="arrow-up-right" size={moderateScale(24)} color="black" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  depositContainer: {
    backgroundColor: "white",
    width: horizontalScale(160),
    height: verticalScale(160),
    marginLeft: horizontalScale(10),
    borderRadius: moderateScale(20),
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(10),
    justifyContent: "space-between",
  },
  iconContainer: {
    width: horizontalScale(30),
    height: verticalScale(40),
    backgroundColor: "black",
    borderRadius: moderateScale(15),
    alignItems: "center",
    justifyContent: "center",
  },
  row: { flexDirection: "row" },
  percent: { color: "green", paddingLeft: horizontalScale(6) },
  text: { color: "grey" },
  incomeText: { fontWeight: "bold", fontSize: moderateScale(20) },
});
