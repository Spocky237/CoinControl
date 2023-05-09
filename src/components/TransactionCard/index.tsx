import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import {
  verticalScale,
  horizontalScale,
  moderateScale,
} from "../../utils/Metrics";

export const TransactionCard = ({ transaction }) => {
  const iconCategorie = require("../../../assets/Icon/transport.png");
  return (
    <View style={styles.container}>
      <View style={styles.rightContainer}>
        <Image source={iconCategorie} style={styles.image} />
        <Text>{transaction.type}</Text>
      </View>
      <Text>{transaction.prix}$</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: moderateScale(15),
    alignItems: "center",
    height: verticalScale(70),
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    margin: moderateScale(5),
    backgroundColor: "white",
    alignSelf: "center",
  },
  rightContainer: { flexDirection: "row", alignItems: "center" },
  image: {
    width: horizontalScale(30),
    aspectRatio: 1,
    resizeMode: "contain",
    marginRight: 15,
  },
});
