import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";

import {
  verticalScale,
  horizontalScale,
  moderateScale,
} from "../../utils/Metrics";

export const SpendingBox = () => {
  return (
    <View style={styles.spendingContainer}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={styles.iconContainer}>
          <AntDesign name="upload" size={moderateScale(16)} color="white" />
        </View>

        <View style={styles.row}>
          <Feather name="trending-up" size={moderateScale(20)} color="green" />
          <Text style={styles.percent}>+1,8%</Text>
        </View>
      </View>

      <View style={[styles.row, { justifyContent: "space-between" }]}>
        <View>
          <Text style={styles.text}>Dons</Text>
          <Text>
            <Text style={styles.spendingText}>$ 1500</Text>
          </Text>
        </View>
        <Feather name="arrow-up-right" size={moderateScale(24)} color="black" />
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  spendingContainer: {
    backgroundColor: "white",
    width: horizontalScale(160),
    height: verticalScale(160),
    marginRight: horizontalScale(10),
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
  spendingText: { fontWeight: "bold", fontSize: moderateScale(20) },
});
