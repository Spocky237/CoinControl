import React from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../utils/Metrics";

export const FitnessHomeTransaction = ({ transaction }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <AntDesign
        name={transaction.type === "deposit" ? "download" : "upload"}
        size={moderateScale(23)}
        color="grey"
      />
      <Text
        style={{
          fontWeight: "400",
          color: transaction.type === "deposit" ? "green" : "red",
        }}
      >
        $ {transaction.prix}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: moderateScale(30),
    width: "95%",
    marginTop: verticalScale(12),
    marginHorizontal: horizontalScale(10),
    height: verticalScale(100),
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: verticalScale(20),
    paddingHorizontal: horizontalScale(20),
    alignItems: "center",
  },
});
