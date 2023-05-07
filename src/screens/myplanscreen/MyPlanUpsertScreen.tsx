import React from "react";
import { View, TextInput, StyleSheet, Text, ScrollView } from "react-native";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../utils/Metrics";

const MyPlanUpsertScreen = () => {
  return (
    <View style={styles.root}>
      <View style={styles.info}>
        <TextInput style={styles.title} placeholder="Enter le nom du plan" />
        <Text style={styles.text}>Entrer le solde</Text>
        <TextInput style={styles.amount} placeholder="0.00" textAlign="right" />
      </View>

      <ScrollView style={styles.detail}>
        <TextInput style={styles.amount} placeholder="0.00" textAlign="right" />
      </ScrollView>
    </View>
  );
};

export default MyPlanUpsertScreen;

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "white" },
  info: {
    height: horizontalScale(200),
    paddingTop: moderateScale(10),
    paddingHorizontal: horizontalScale(20),
  },
  title: {
    width: "100%",
    fontWeight: "500",
    fontSize: moderateScale(20),
    height: horizontalScale(60),
    borderBottomWidth: moderateScale(3),
    borderColor: "#2309",
  },
  amount: {
    padding: moderateScale(15),
    width: "100%",
    fontWeight: "500",
    fontSize: moderateScale(20),
    height: horizontalScale(55),
    backgroundColor: "lightgrey",
    borderRadius: moderateScale(25),
  },
  text: {
    fontWeight: "bold",
    paddingTop: horizontalScale(25),
    fontSize: moderateScale(16),
    paddingBottom: horizontalScale(10),
  },
  detail: {
    backgroundColor: "lightgrey",
    borderTopLeftRadius: moderateScale(2),
    borderTopRightRadius: moderateScale(20),
  },
});
